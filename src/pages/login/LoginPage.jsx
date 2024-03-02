import { useEffect, useState } from 'react';
import * as S from './style/LoginPage.S'
import { login } from '../../Api';
import { useNavigate } from 'react-router-dom';

export const LoginPage = ({setUser}) => {
    
    //Состояние input почта
    const [email, setEmail] = useState("")
    //Состояние input пароль
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    //Консолим изменения в input в консоли
    useEffect(() => {
        console.log(email, password);
    }, [email, password])

    //Функция входа
    //Делаем запрос в Api, если пользователь существует, то мы получаем токен
    //И если токен существует, то разрешаем доступ к приложению
    const loginPost = async () => {

        const result = await login(email, password)
        
        console.log(result);

        if (result) {
            console.log("Авторизация выполнена успешно")
            setUser(true);
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