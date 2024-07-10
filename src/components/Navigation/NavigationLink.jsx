
import * as S from "./style/NavigationLink.S.js"
import { UserContext } from '../context/UserContext.js';
import { useContext } from 'react';
import { setCurrentTrack } from "../../store/slices/slice.js";
import { useDispatch } from "react-redux";

const NavigationLink = () => {
    const { setUser } = useContext(UserContext);
    const dispatch = useDispatch()
    const logout = () => {
        setUser(false);
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        dispatch(setCurrentTrack(null))
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
                    <S.MenuLink to="/login" onClick={logout} >Выйти</S.MenuLink>
                </S.MenuItem>

            </S.MenuList>
        </S.NavMenu>
    );
};

export default NavigationLink