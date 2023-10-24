import * as S from './style/registrationPage.S'

export const RegistrationPage = () => {
    return (

        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin action="#">
                        <S.ModalFormLoginLink href="#">
                            <S.ModalLogo>
                                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </S.ModalFormLoginLink>

                        <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
                        <S.ModalInputPassword type="password" name="password" placeholder="Пароль" />
                        <S.ModalInputPasswordDouble type="password" name="password" placeholder="Повторите пароль"/>

                        <S.ModalBtnSignUpEnt >
                            <S.ModalBtnSignUpEntLink to="/main">Зарегистрироваться</S.ModalBtnSignUpEntLink>
                        </S.ModalBtnSignUpEnt>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};