import * as S from "./style/NavigationLink.S.js"

// ССЫЛКИ ПО ПРЕЛОЖЕНИЮ
const NavigationLink = () => {
    return (
        <S.NavMenu >
            <S.MenuList >
                <S.MenuItem >
                    <S.MenuLink href="#" >Главное</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem >
                    <S.MenuLink href="#" >Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem >
                    <S.MenuLink href="../signin.html" >Войти</S.MenuLink>
                </S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
    );
};

export default NavigationLink