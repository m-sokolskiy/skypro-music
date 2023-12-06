import NavigationLink from './NavigationLink.jsx';
import { useState } from 'react';
import * as S from "./style/NavigationBurger.S.js"

// ВЫПАДАЮЩЕЕ МЕНЮ
const NavigationBurger = ({logout}) => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <S.NavBurger onClick={() => setVisible(!visible)}>
                <S.BurgerLine ></S.BurgerLine>
                <S.BurgerLine ></S.BurgerLine>
                <S.BurgerLine ></S.BurgerLine>
            </S.NavBurger>
            {visible && (<NavigationLink logout={logout}/>)}
        </>

    );
}
export default NavigationBurger

