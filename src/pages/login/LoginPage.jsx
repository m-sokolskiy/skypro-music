import { useContext, useState } from 'react';
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

        if (!email && !password) {
            setError("Заполните поля")
            return;
        }
        if (!email) {
            setError("Укажите почту");
            return;
        }
        if (!password) {
            setError("Укажите пароль");
            return;
        }
        setBlock(true)
        postLogin(email, password).then((data) => {
            localStorage.setItem("user", JSON.stringify(data))
            setUser(data)
            navigate("/main");
        }).then(() => {
            return getToken(email, password)
        }).then((token) => {
            localStorage.setItem("token", JSON.stringify(token))
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setBlock(false)
        })
    }

    return (

        <S.Wrapper>
            <S.ContainerEnter>

                <S.ModalBlock>

                    <S.ModalFormLogin action="#">

                        <S.ModalFormLoginLink to="/login">
                            <S.ModalLogo>
                                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </S.ModalFormLoginLink>

                        <S.ModalInputLogin value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="login" placeholder="Почта" />

                        <S.ModalInputPassword value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Пароль" />

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

