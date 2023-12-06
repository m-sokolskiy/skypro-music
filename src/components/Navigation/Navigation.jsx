import Logo from './Logo.jsx';
import NavigationBurger from './NavigationBurger.jsx';
import * as S from './style/Navigation.S.js'

// КОМПОНЕНТ НАВИГАЦИИ
const Navigation = ({logout}) => {
    return (
        <S.MainNav >
            <Logo />
            <NavigationBurger logout={logout}/>
        </S.MainNav>
    );
}
export default Navigation

