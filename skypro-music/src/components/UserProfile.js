import './style/UserProfile.css'

// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
const UserProfile = () => {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__icon">
                <svg alt="logout">
                    <use href="../img/icon/sprite.svg#logout"></use>
                </svg>
            </div>
        </div>
    );
}
export default UserProfile