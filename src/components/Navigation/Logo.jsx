import * as S from "./style/Logo.S.js"

// ЛОГОТИП
const Logo = () => {
    return (
        <S.NanLogo >
            <S.LogoLink to="/main">
                <S.LogoImage src="../img/logo.png" alt="logo" />

            </S.LogoLink>
        </S.NanLogo>
    );
}
export default Logo
