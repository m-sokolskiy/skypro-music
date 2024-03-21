import { useState } from 'react';
import NavigationLink from './NavigationLink.jsx';
import * as S from "./style/NavigationBurger.S.js"


// ВЫПАДАЮЩЕЕ МЕНЮ
const NavigationBurger = () => {


    const [visible, setVisible] = useState(false)

    return (
        <>
            <S.NavBurger onClick={() => setVisible(!visible)}>
                <S.BurgerLine ></S.BurgerLine>
                <S.BurgerLine ></S.BurgerLine>
                <S.BurgerLine ></S.BurgerLine>
            </S.NavBurger>
            {visible && (<NavigationLink />)}
        </>

    );
}
export default NavigationBurger

