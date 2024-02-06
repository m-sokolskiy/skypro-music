import { useState } from 'react';
import FilterList from './FilterList.jsx';
import * as S from './style/Filter.S.js'


// ФИЛЬТР
const Filter = () => {

    const [isActive, setIsActive] = useState("")

    const activeSlide = (name) => {
        if (isActive !== name) {
            setIsActive(name);
        } else {
            setIsActive("")
        }
    }

    return (

        <S.CenterBlockFilter >

            {isActive !== "" ? <FilterList name={isActive} setIsActive={setIsActive} /> : ""}

            <S.FilterTitle>Искать по:</S.FilterTitle>

            {/* Исполнитель */}
            <div onClick={() => { activeSlide("button-author") }}>
                {isActive === "button-author" ? <S.FilterButtonActive>исполнителю</S.FilterButtonActive> : <S.FilterButton>исполнителю</S.FilterButton>}
            </div>

            {/* Год выпуска */}
            <div onClick={() => { activeSlide("button-year"); }}>
                {isActive === "button-year" ? <S.FilterButtonActive>году выпуска</S.FilterButtonActive> : <S.FilterButton>году выпуска</S.FilterButton>}
            </div>

            {/* Жанр */}
            <div onClick={() => { activeSlide("button-genre"); }}>
                {isActive === "button-genre" ? <S.FilterButtonActive>жанру</S.FilterButtonActive> : <S.FilterButton>жанру</S.FilterButton>}
            </div>

        </S.CenterBlockFilter>
    );
};
export default Filter