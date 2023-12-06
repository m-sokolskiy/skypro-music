import * as S from './style/UserProfile.S'

// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
const UserProfile = ({logout}) => {
    return (
        <S.SidebarPersonal >
            <S.SidebarPersonalName className="sidebar__personal-name">Sergey.Ivanov</S.SidebarPersonalName>
            <S.SidebarIconButton >
                <S.SidebarLogoutSvg onClick={logout} alt="logout">
                    <use href="../img/icon/sprite.svg#logout"></use>
                </S.SidebarLogoutSvg>
            </S.SidebarIconButton>
        </S.SidebarPersonal >
    );
}
export default UserProfile