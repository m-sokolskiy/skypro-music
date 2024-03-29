import { useContext } from 'react';
import * as S from './style/UserProfile.S'
import { UserContext } from '../context/UserContext';

// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const logout = () => {
        setUser(false);
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
    }
    return (
        <S.SidebarPersonal >
            <S.SidebarPersonalName >{user?.username}</S.SidebarPersonalName>
            <S.SidebarIcon >
                <S.SidebarLogoutSvg alt="logout" onClick={logout}>
                    <use href="../img/icon/sprite.svg#logout"></use>
                </S.SidebarLogoutSvg>
            </S.SidebarIcon>
        </S.SidebarPersonal >
    );
}
export default UserProfile