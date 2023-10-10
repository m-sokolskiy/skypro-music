import NavigationLink from './NavigationLink';
import './style/NavigationBurger.css'
import { useState } from 'react';


// ВЫПАДАЮЩЕЕ МЕНЮ
const NavigationBurger = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <div className="nav__burger burger" onClick={() =>setVisible(!visible)}>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            {visible && (<NavigationLink />)}
        </div>

    );
}
export default NavigationBurger

