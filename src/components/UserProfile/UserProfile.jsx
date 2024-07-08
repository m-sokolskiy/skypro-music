import { useContext } from 'react';
import * as S from './style/UserProfile.S'
import { UserContext } from '../context/UserContext';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../store/slices/slice';

// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const dispatch = useDispatch()
    const logout = () => {
        setUser(false);
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        dispatch(setCurrentTrack(null))
    }
    return (
        <S.SidebarPersonal >
            <S.SidebarPersonalName >{user.username}</S.SidebarPersonalName>
            <S.SidebarIcon >
                <S.SidebarLogoutSvg alt="logout" onClick={logout}>
                    <use href="../img/icon/sprite.svg#logout"></use>
                </S.SidebarLogoutSvg>
            </S.SidebarIcon>
        </S.SidebarPersonal >
    );
}
export default UserProfile