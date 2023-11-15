import { registration } from '../../Api';
import * as S from './style/RegisterPage.S'
import { useEffect, useState } from 'react';


export const RegisterPage = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log(email, password);
    }, [email, password, username])

    const register = async () => {
        const result = await registration(email, password, username)
        console.log(result);
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

                        <S.ModalBtnSignUpEnt >
                            <S.ModalBtnSignUpEntLink onClick={register} to="/">Зарегистрироваться</S.ModalBtnSignUpEntLink>
                        </S.ModalBtnSignUpEnt>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};