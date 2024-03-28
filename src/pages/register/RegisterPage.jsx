import { Link, useNavigate } from 'react-router-dom';
import { postRegister } from '../../Api';
import * as S from './style/RegisterPage.S'
import { useEffect, useState } from 'react';


export const RegisterPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("");

    const [error, setError] = useState(null);
    const [block, setBlock] = useState(null);

    const register = async () => {

        if (!email && !password && !username) {
            setError("Заполните поля");
            return;
        }
        if (!email) {
            setError("Укажите почту");
            return;
        }
        if (!username) {
            setError("Укажите имя пользователя");
            return;
        }
        if (!password) {
            setError(" Укажите пароль");
            return;
        }
        if (!repeatPassword) {
            setError("Повторите пароль");
            return;
        }
        if (password !== repeatPassword) {
            setError("Пароли не совпадают");
        }
        setBlock(true)
        postRegister(email, password, username).then((data) => {
         navigate("/");
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setBlock(false)
        })

    }

    useEffect(() => {
        setError(null);
    }, [email, username, password, repeatPassword]);

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
                        <S.ModalInputLogin value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="login" placeholder="Почта" />

                        {/* Инпут Имя пользователя */}
                        <S.ModalInputPassword value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="username" placeholder="Имя пользователя" />

                        {/* Инпут Пароль */}
                        <S.ModalInputPasswordDouble value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Пароль" />

                        {/* Инпут Повторите Пароль */}
                        <S.ModalInputPasswordDouble value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)} type="password" name="repeatPassword" placeholder="Повторите пароль" />

                        {/* Рендер ошибки */}
                        {error && <S.Error>{error}</S.Error>}

                        <S.Buttons>
                            <S.SignUpButton onClick={register} disabled={block} type="button" >
                                {block ? "Регестрируем..." : "Зарегестрироваться"}
                            </S.SignUpButton>

                            <Link to="/">
                                <S.LoginButton >Войти</S.LoginButton>
                            </Link>

                        </S.Buttons>

                    </S.ModalFormLogin>

                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};