import Logo from './Logo.js';
import NavigationBurger from './NavigationBurger.js';
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

