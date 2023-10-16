import Logo from './Logo.jsx';
import NavigationBurger from './NavigationBurger.jsx';
import * as S from './style/Navigation.S.js'

// КОМПОНЕНТ НАВИГАЦИИ
const Navigation = () => {
    return (
        <S.MainNav >
            <Logo />
            <NavigationBurger />
        </S.MainNav>
    );
}
export default Navigation

