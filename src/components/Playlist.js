import './style/Playlist.css'

const playList = {
    tracks: [
        {
            nickname: "Баста",
            img: " ",
            author: "Nero",
            album: "Welcome Reality",
            liked: " ",
            time: "4:44",
            id: 1,
        },
    ]
}

// ПЛЕЙЛИСТ
const Playlist = () => {

    return (

        <div className="centerblock__content">

            {/* Титул */}
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <svg className="playlist-title__svg" alt="time">
                        <use href="../img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>

            
                <ul className="content__playlist playlist">

                    {/* Трек */}
                    {playList.tracks.map((track) => (
                    <li className="playlist__item" key={track.id}>

                        <div className="playlist__track track">

                            <div className="track__title">

                                <div className="track__title-image">

                                    <svg className="track__title-svg" alt="music">
                                        <use href="../img/icon/sprite.svg#icon-note"></use>
                                    </svg>

                                </div>

                                <div className="track__title-text">
                                    <a className="track__title-link" href="http://">{track.nickname}<span className="track__title-span"></span></a>
                                </div>

                            </div>

                            <div className="track__author">
                                <a className="track__author-link" href="http://">{track.author}</a>
                            </div>

                            <div className="track__album">
                                <a className="track__album-link" href="http://">{track.album}</a>
                            </div>

                            <div className="track__time">

                                <svg className="track__time-svg" alt="time">
                                    <use href="../img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className="track__time-text">{track.time}</span>

                            </div>
                        </div>

                    </li>))}


                </ul>
        </div>
    );
}
export default Playlist