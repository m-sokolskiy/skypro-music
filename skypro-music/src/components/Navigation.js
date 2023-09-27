import Logo from './Logo';
import NavigationBurger from './NavigationBurger';
import NavigationLink from './NavigationLink';
import './style/Navigation.css'

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

