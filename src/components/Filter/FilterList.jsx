import { playListArr } from '../Array.js';
import * as S from './style/FilterList.S.js'

// Поп-Ап
const FilterList = ({ name }) => {
    
    if (name === "button-author") {
        return (
            <S.PopUpWindowAuthor>
                {playListArr.tracks.map((track) => {
                    return <S.PopUpText key={track.id}>{track.author}</S.PopUpText>;
                })}
            </S.PopUpWindowAuthor>
        );
    } else if (name === "button-year") {
    
        return (
            <S.PopUpWindowYear >
                <S.PopUpText >2020</S.PopUpText>
                <S.PopUpText >2021</S.PopUpText>
                <S.PopUpText >2022</S.PopUpText>
                <S.PopUpText >2023</S.PopUpText>
            </S.PopUpWindowYear>
        )
    } else if (name === "button-genre") {
        return (
            <S.PopUpWindowGenre >
                <S.PopUpText >Лирика</S.PopUpText>
                <S.PopUpText >Поп</S.PopUpText>
                <S.PopUpText >Реп</S.PopUpText>
                <S.PopUpText >Хип-Хоп</S.PopUpText>
            </S.PopUpWindowGenre>
        );
    };
};
export default FilterList