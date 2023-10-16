import * as S from './style/UserProfile.S'

// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
const UserProfile = () => {
    return (
        <S.SidebarPersonal >
            <S.SidebarPersonalName className="sidebar__personal-name">Sergey.Ivanov</S.SidebarPersonalName>
            <S.SidebarIcon className="sidebar__icon">
                <S.SidebarLogoutSvg alt="logout">
                    <use href="../img/icon/sprite.svg#logout"></use>
                </S.SidebarLogoutSvg>
            </S.SidebarIcon>
        </S.SidebarPersonal >
    );
}
export default UserProfile