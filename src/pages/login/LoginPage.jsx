import { useContext, useState } from 'react';
import * as S from './style/LoginPage.S'
import { getToken, postLogin } from '../../Api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/context/UserContext';

export const LoginPage = () => {
    //Вызываю данные из контекста
    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const login = async () => {
        await postLogin(email, password)
            .then((data) => {
                console.log(data.json())
            })

        await JSON.parse(localStorage.getItem("user"))
            .then((token) => {
                console.log(token)
            })


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

                            <S.ModalBtnEnterLink onClick={login}>Войти</S.ModalBtnEnterLink>

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