import { useNavigate } from 'react-router-dom';
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

    const register = async () => {

        if (email.length === 0 && password.length === 0 && username.length === 0) {
            setError("Заполните поля");
        } else if (email.length === 0) {
            setError("Укажите почту");
            return;
        } else if (username.length === 0) {
            setError("Укажите имя пользователя");
            return;
        } else if (password.length === 0) {
            setError(" Укажите пароль");
            return;
        } else if (repeatPassword.length === 0) {
            setError("Повторите пароль");
            return;
        } else if (password !== repeatPassword) {
            setError("Пароли не совпадают");
        } else {
            try {
                const result = await postRegister(email, password, username)
                    .then((data) => {
                        if (data.email && data.email !== undefined) {
                            throw new Error(data.email);
                        } else if ((data.username && data.username !== undefined)) {
                            throw new Error(data.username);
                        } else if ((data.password && data.password !== undefined)) {
                            throw new Error(data.password);
                        }
                    })
                navigate("/");
            } catch (error) {
                console.log(error.message);
                setError(error.message);
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
                        <S.ModalInputLogin value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="login" placeholder="Почта" />

                        {/* Инпут Имя пользователя */}
                        <S.ModalInputPassword value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="username" placeholder="Имя пользователя" />

                        {/* Инпут Пароль */}
                        <S.ModalInputPasswordDouble value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Пароль" />

                        {/* Инпут Повторите Пароль */}
                        <S.ModalInputPasswordDouble value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)} type="password" name="repeatPassword" placeholder="Повторите пароль" />

                        {/* Рендер ошибки */}
                        {error && <S.Error>{error}</S.Error>}

                        <S.ModalBtnSignUpEnt >
                            <S.ModalBtnSignUpEntLink onClick={register} >Зарегистрироваться</S.ModalBtnSignUpEntLink>
                        </S.ModalBtnSignUpEnt>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};