import { useState } from 'react';
import './style/Filter.css'
import { playListArr } from './Array.js';

// ФИЛЬТР
const Filter = () => {

    const [visibleAuthor, setVisibleAuthor] = useState(false);
    const [visibleYear, setVisibleYear] = useState(false);
    const [visibleGenre, setVisibleGenre] = useState(false);

    const PopUpAuthor = () => {
        setVisibleAuthor(!visibleAuthor);
        setVisibleYear(false)
        setVisibleGenre(false)
    }

    const PopUpYear = () => {
        setVisibleYear(!visibleYear);
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }

    const PopUpGenre = () => {
        setVisibleGenre(!visibleGenre);
        setVisibleAuthor(false)
        setVisibleYear(false)
    }

    return (
        <div className="centerblock__filter filter">

            <div className="filter__title">Искать по:</div>

            {/* Исполнитель */}
            <div className="filter__button button-author _btn-text" onClick={() => PopUpAuthor()} >
                исполнителю
            </div>
            {
                visibleAuthor && (
                    <div className="popUp__window-author">
                        {playListArr.tracks.map((track) => {
                            return <a className="popUp__link_text" key={track.id}>{track.author}</a>;
                        })}
                    </div>
                )
            }



            {/* Год выпуска */}
            <div className="filter__button button-year _btn-text" onClick={() => PopUpYear()}>году выпуска</div>
            {
                visibleYear && (
                    <div className="popUp__window-year">
                        <a className="popUp__link_text">2020</a>
                        <a className="popUp__link_text">2021</a>
                        <a className="popUp__link_text">2022</a>
                        <a className="popUp__link_text">2023</a>
                    </div>
                )
            }

            {/* Жанр */}
            <div className="filter__button button-genre _btn-text" onClick={() => PopUpGenre()}>жанру</div>
            {
                visibleGenre && (
                    <div className="popUp__window-genre">
                        <a className="popUp__link_text">Лирика</a>
                        <a className="popUp__link_text">Поп</a>
                        <a className="popUp__link_text">Реп</a>
                        <a className="popUp__link_text">Хип-Хоп</a>
                    </div>
                )
            }
        </div>
    );
};
export default Filter