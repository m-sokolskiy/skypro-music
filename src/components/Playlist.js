import './style/Playlist.css'
import 'react-loading-skeleton/dist/skeleton.css'
import PlaylistTrack from './PlaylistTrack';

// МАССИВ ТРЕКОВ
const playList = {
    tracks: [
        {
            nickname: "Кинолента",
            img: " ",
            author: "Баста",
            album: "Баста 3",
            liked: " ",
            time: "4:23",
            id: 1,
        },
        {
            nickname: "Ты та...",
            img: " ",
            author: "Баста",
            album: "Баста 1",
            liked: " ",
            time: "4:02",
            id: 2,
        }
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
                    <PlaylistTrack key={track.id} track={track} />
                ))}
            </ul>
        </div>
    );
}
export default Playlist