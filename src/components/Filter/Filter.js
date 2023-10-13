import { useState } from 'react';
import './style/Filter.css'
import FilterList from './FilterList';

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
        <div className="centerblock__filter filter">

            {activeFilter !== "" ? <FilterList name={activeFilter} /> : ""}
            <div className="filter__title">Искать по:</div>

            {/* Исполнитель */}
            <div className={activeFilter === "button-author" ? "filter__button button-author _btn-text btn-active" : "filter__button button-author _btn-text"} onClick={() => {
                activeSlide("button-author");
            }}>
                исполнителю
            </div>

            {/* Год выпуска */}
            <div className={activeFilter === "button-year" ? "filter__button button-year _btn-text btn-active" : "filter__button button-year _btn-text"} onClick={() => {
                activeSlide("button-year");
            }}>году выпуска
            </div>

            {/* Жанр */}
            <div className={activeFilter === "button-genre" ? "filter__button button-genre _btn-text btn-active" : "filter__button button-genre _btn-text"} onClick={() => {
                activeSlide("button-genre");
            }}>жанру
            </div>

        </div>
    );
};
export default Filter