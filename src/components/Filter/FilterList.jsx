import { playListArr } from '../Array.js';
import * as S from './style/FilterList.S.js'

// Поп-Ап
const FilterList = ({ name }) => {
    
    if (name === "button-author") {
        return (
            <S.PopUpWindowAuthor>
                <S.PopUpText >Баста</S.PopUpText>
                <S.PopUpText >Каста</S.PopUpText>
                <S.PopUpText >Паста</S.PopUpText>
            </S.PopUpWindowAuthor>
        );
    } else if (name === "button-year") {
    
        return (
            <S.PopUpWindowYear >
                <S.PopUpText >2022</S.PopUpText>
                <S.PopUpText >2023</S.PopUpText>
                <S.PopUpText >2024</S.PopUpText>
            </S.PopUpWindowYear>
        )
    } else if (name === "button-genre") {
        return (
            <S.PopUpWindowGenre >
                <S.PopUpText >Реп</S.PopUpText>
                <S.PopUpText >Поп</S.PopUpText>
                <S.PopUpText >Кек</S.PopUpText>

            </S.PopUpWindowGenre>
        );
    };
};
export default FilterList