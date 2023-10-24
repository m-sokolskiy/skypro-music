import * as S from "./style/NavigationLink.S.js"

// ССЫЛКИ ПО ПРЕЛОЖЕНИЮ
const NavigationLink = () => {
    return (
        <S.NavMenu >
            <S.MenuList >

                <S.MenuItem >
                    <S.MenuLink to="/main" >Главное</S.MenuLink>
                </S.MenuItem>

                <S.MenuItem >
                    <S.MenuLink to="/favorite" >Мой плейлист</S.MenuLink>
                </S.MenuItem>

                <S.MenuItem >
                    <S.MenuLink to="/" >Войти</S.MenuLink>
                </S.MenuItem>

            </S.MenuList>
        </S.NavMenu>
    );
};

export default NavigationLink