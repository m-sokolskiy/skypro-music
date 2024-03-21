import { useContext } from 'react';
import * as S from './style/UserProfile.S'
import { UserContext } from '../context/UserContext';

// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
const UserProfile = () => {
    const { user } = useContext(UserContext);
    return (
        <S.SidebarPersonal >
            <S.SidebarPersonalName className="sidebar__personal-name">{user?.email}</S.SidebarPersonalName>
            <S.SidebarIcon className="sidebar__icon">
                <S.SidebarLogoutSvg alt="logout">
                    <use href="../img/icon/sprite.svg#logout"></use>
                </S.SidebarLogoutSvg>
            </S.SidebarIcon>
        </S.SidebarPersonal >
    );
}
export default UserProfile