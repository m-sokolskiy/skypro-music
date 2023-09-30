import NavigationLink from './NavigationLink';
import './style/NavigationBurger.css'
import { useState } from 'react';


// ВЫПАДАЮЩЕЕ МЕНЮ
const NavigationBurger = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => setVisible(!visible);

    return (
        <div>
            <div className="nav__burger burger" onClick={toggleVisibility}>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            {visible && (<NavigationLink />)}
        </div>

    );
}
export default NavigationBurger

