import { useState } from 'react';
import FilterList from './FilterList.jsx';
import * as S from './style/Filter.S.js'


// ФИЛЬТР
const Filter = () => {

    const [activeFilter, setActiveFilter] = useState("")

    const activeSlide = (activeClassName) => {
        if (activeFilter !== activeClassName) {
            setActiveFilter(activeClassName);
        } else {
            setActiveFilter("")
        }

    }

    return (

        <S.CenterBlockFilter >

            {activeFilter !== "" ? <FilterList name={activeFilter} /> : ""}

            <S.FilterTitle>Искать по:</S.FilterTitle>

            {/* Исполнитель */}
            <div onClick={() => {activeSlide("button-author")}}> 
                {activeFilter === "button-author" ? <S.FilterButtonActive>исполнителю</S.FilterButtonActive> : <S.FilterButton>исполнителю</S.FilterButton>}
            </div>

            {/* Год выпуска */}
            <div onClick={() => {activeSlide("button-year");}}>
                {activeFilter === "button-year" ? <S.FilterButtonActive>году выпуска</S.FilterButtonActive> : <S.FilterButton>году выпуска</S.FilterButton>} 
            </div>

            {/* Жанр */}
            <div onClick={() => {activeSlide("button-genre");}}>
                {activeFilter === "button-genre" ? <S.FilterButtonActive>жанру</S.FilterButtonActive> : <S.FilterButton>жанру</S.FilterButton>}
            </div>

        </S.CenterBlockFilter>
    );
};
export default Filter