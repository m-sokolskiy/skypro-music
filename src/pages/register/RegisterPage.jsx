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

                        {/* Инпут почта */}
                        <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
                        
                        {/* Инпут Имя пользователя */}
                        <S.ModalInputPassword type="password" name="password" placeholder="Имя пользователя" />

                        {/* Инпут Повторите пароль */}
                        <S.ModalInputPasswordDouble type="password" name="password" placeholder="Пароль" />

                        <S.ModalBtnSignUpEnt >
                            <S.ModalBtnSignUpEntLink to="/">Зарегистрироваться</S.ModalBtnSignUpEntLink>
                        </S.ModalBtnSignUpEnt>

                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};