import { playListArr } from '../Array.js';

// Поп-Ап
const FilterList = ({ name }) => {
    let activeClassName = "";
    if (name === "button-author") {
        activeClassName = "popUp__window-author";
        return (
            <div className={activeClassName}>
                {playListArr.tracks.map((track) => {
                    return <a className="popUp__link_text" key={track.id}>{track.author}</a>;
                })}
            </div>
        );
    } else if (name === "button-year") {
        activeClassName = "popUp__window-year";
        return (
            <div className={activeClassName}>
                <a className="popUp__link_text">2020</a>
                <a className="popUp__link_text">2021</a>
                <a className="popUp__link_text">2022</a>
                <a className="popUp__link_text">2023</a>
            </div>
        )
    } else if (name === "button-genre") {
        activeClassName = "popUp__window-genre"
        return (
            <div className={activeClassName}>
                <a className="popUp__link_text">Лирика</a>
                <a className="popUp__link_text">Поп</a>
                <a className="popUp__link_text">Реп</a>
                <a className="popUp__link_text">Хип-Хоп</a>
            </div>
        );
    };
};
export default FilterList