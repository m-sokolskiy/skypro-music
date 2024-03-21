import { useContext, useEffect, useState } from 'react';
import * as S from './style/LoginPage.S'
import { getToken, postLogin } from '../../Api';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/context/UserContext';

export const LoginPage = () => {
    //Вызываю данные из контекста

    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const [block, setBlock] = useState(null);


    const navigate = useNavigate()

    const login = async () => {

        if (email.length === 0 && password.length === 0) {
            setError("Заполните поля");
        } else if (email.length === 0) {
            setError("Укажите почту");
            return;
        } else if (password.length === 0) {
            setError("Укажите пароль");
            return;
        } else {
            try {
                setBlock(true)
                postLogin(email, password).then((data) => {
                    localStorage.setItem("user", JSON.stringify(data))
                    if (data.detail) {
                        throw new Error(data.detail);
                    }
                    setBlock(false)
                    setUser(data)
                    navigate("/main");
                }).then(() => {
                    return getToken(email, password)
                }).then((token) => {
                    localStorage.setItem("token", JSON.stringify(token))
                })
            } catch (error) {
                setError(error.message);
                setBlock(false)
            };
        }

    }

    return (

        <S.Wrapper>
            <S.ContainerEnter>

                <S.ModalBlock>

                    <S.ModalFormLogin action="#">

                        <S.ModalFormLoginLink to="/">
                            <S.ModalLogo>
                                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </S.ModalFormLoginLink>

                        {/* Инпут почта */}
                        <S.ModalInputLogin value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="login" placeholder="Почта" />

                        {/* Инпут пароль */}
                        <S.ModalInputPassword value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Пароль" />

                        {/* Рендер ошибки */}
                        {error && <S.Error>{error}</S.Error>}

                        <S.Buttons>
                            <S.SignInButton onClick={login} disabled={block} type="button" >
                                {block ? "Входим..." : "Войти"}

                            </S.SignInButton>

                            <Link to="/register">
                                <S.RegisterButton>Зарегестрироваться</S.RegisterButton>
                            </Link>

                        </S.Buttons>

                    </S.ModalFormLogin>

                </S.ModalBlock>

            </S.ContainerEnter>
        </S.Wrapper>
    );
};

