import * as S from './style/loginPage.S'

export const LoginPage = () => {
    return (

        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin action="#">

                        <S.ModalFormLoginLink to="/main">
                            <S.ModalLogo>
                                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </S.ModalFormLoginLink>

                        <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
                        <S.ModalInputPassword type="password" name="password" placeholder="Пароль" />

                        <S.ModalBtnEnter >

                            <S.ModalBtnEnterLink to="/main">Войти</S.ModalBtnEnterLink>

                        </S.ModalBtnEnter>

                        <S.ModalBtnSignUp >

                            <S.ModalBtnSignUpLink to="/registration">Зарегистрироваться</S.ModalBtnSignUpLink>

                        </S.ModalBtnSignUp>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};