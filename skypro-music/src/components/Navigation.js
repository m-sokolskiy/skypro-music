
// КОМПОНЕНТ НАВИГАЦИИ
const Navigation = () => {
    return (
        <nav className="main__nav nav">
            <Logo/>
            <NavigationBurger/>
            <NavigationLink/>
        </nav>
    );
}
export default Navigation
// ВЫПАДАЮЩЕЕ МЕНЮ
const NavigationBurger = () => {
    return (
        <div className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    );
}
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
// ЛОГОТИП
const Logo = () => {
    return (
        <div className="nav__logo logo">
        <img className="logo__image" src="../img/logo.png" alt="logo" />
    </div>
    );
}