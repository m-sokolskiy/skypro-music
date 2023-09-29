import Logo from './Logo';
import NavigationBurger from './NavigationBurger';
import './style/Navigation.css';

// КОМПОНЕНТ НАВИГАЦИИ
const Navigation = () => {  
    return (
        <nav className="main__nav nav">
            <Logo />
            <NavigationBurger />
        </nav>
    );
}
export default Navigation

