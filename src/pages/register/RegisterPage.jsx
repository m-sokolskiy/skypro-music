import * as S from './style/RegisterPage.S'

export const RegisterPage = () => {
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

                        <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
                        <S.ModalInputPassword type="password" name="password" placeholder="Пароль" />
                        <S.ModalInputPasswordDouble type="password" name="password" placeholder="Повторите пароль"/>

                        <S.ModalBtnSignUpEnt >
                            <S.ModalBtnSignUpEntLink to="/">Зарегистрироваться</S.ModalBtnSignUpEntLink>
                        </S.ModalBtnSignUpEnt>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};