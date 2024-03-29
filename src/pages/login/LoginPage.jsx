import { useEffect, useState } from 'react';
import * as S from './style/LoginPage.S'
import { login } from '../../Api';
import { setToken } from '../../localStorage';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        console.log(email, password);
    }, [email, password])

    useEffect(() => {
        console.log("Логин компонент");
    }, [])

    const loginPost = async () => {
        const result = await login(email, password)
        console.log(result);
        if (result) {
            setToken(result.access);
            navigate('/main');
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

                        <S.ModalBtnEnter >

                            <S.ModalBtnEnterLink to="/main" onClick={loginPost}>Войти</S.ModalBtnEnterLink>

                        </S.ModalBtnEnter>

                        <S.ModalBtnSignUp >

                            <S.ModalBtnSignUpLink to="/register">Зарегистрироваться</S.ModalBtnSignUpLink>

                        </S.ModalBtnSignUp>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};