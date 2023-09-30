import './style/NavigationLink.css'

// ССЫЛКИ ПО ПРЕЛОЖЕНИЮ
const NavigationLink = () => {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#" class="menu__link">Главное</a>
                </li>
                <li className="menu__item">
                    <a href="#" class="menu__link">Мой плейлист</a>
                </li>
                <li className="menu__item">
                    <a href="../signin.html" class="menu__link">Войти</a>
                </li>
            </ul>
        </div>
    );
}

export default NavigationLink