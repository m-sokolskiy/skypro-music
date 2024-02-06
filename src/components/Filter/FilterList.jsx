import * as S from './style/FilterList.S.js'

// Поп-Ап
const FilterList = ({ name }) => {

    if (name === "button-author") {
        return (
            <S.PopUpAuthor>
                <S.PopUp>
                    <S.PopUpText >Баста</S.PopUpText>
                    <S.PopUpText >Каста</S.PopUpText>
                    <S.PopUpText >Паста</S.PopUpText>
                </S.PopUp>
            </S.PopUpAuthor>
        );
    } else if (name === "button-year") {
        return (
            <S.PopUpYear>
                <S.PopUp >
                    <S.PopUpText >2022</S.PopUpText>
                    <S.PopUpText >2023</S.PopUpText>
                    <S.PopUpText >2024</S.PopUpText>
                </S.PopUp>
            </S.PopUpYear>
        )
    } else if (name === "button-genre") {
        return (
            <S.PopUpGenre >
                <S.PopUp >
                    <S.PopUpText >Реп</S.PopUpText>
                    <S.PopUpText >Поп</S.PopUpText>
                    <S.PopUpText >Кек</S.PopUpText>
                </S.PopUp>
            </S.PopUpGenre>
        );
    };
};
export default FilterList