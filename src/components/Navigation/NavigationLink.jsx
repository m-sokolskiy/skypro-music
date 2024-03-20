
import * as S from "./style/NavigationLink.S.js"
import { UserContext } from '../context/UserContext.js';
import { useContext} from 'react';


// ССЫЛКИ ПО ПРЕЛОЖЕНИЮ
const NavigationLink = () => {
    const { setUser } = useContext(UserContext);
    const logout = () => {
        setUser(false);
        window.localStorage.removeItem("user");
    }
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
                    <S.MenuLink to="/" onClick={logout} >Выйти</S.MenuLink>
                </S.MenuItem>

            </S.MenuList>
        </S.NavMenu>
    );
};

export default NavigationLink