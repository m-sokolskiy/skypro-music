import Logo from './Logo';
import NavigationBurger from './NavigationBurger';
import NavigationLink from './NavigationLink';
import './style/Navigation.css';
import { useState } from 'react';

// КОМПОНЕНТ НАВИГАЦИИ
const Navigation = () => {
    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(!visible);
    
    return (
        <nav className="main__nav nav">
            <Logo/>
            <NavigationBurger onClick={toggleVisibility}/>
            {visible && (<NavigationLink/>)}
        </nav>
    );
}
export default Navigation

