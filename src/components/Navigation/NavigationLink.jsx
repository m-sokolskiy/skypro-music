import { removeToken } from "../../localStorage.js";
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
                    <S.MenuLink to="/favorites" >Мой плейлист</S.MenuLink>
                </S.MenuItem>

                <S.MenuItem >
                    <S.MenuLink to="/" onClick={() => removeToken()} >Выйти</S.MenuLink>
                </S.MenuItem>

            </S.MenuList>
        </S.NavMenu>
    );
};

export default NavigationLink