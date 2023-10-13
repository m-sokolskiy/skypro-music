import './style/Playlist.S.js'
import 'react-loading-skeleton/dist/skeleton.css'
import PlaylistTrack from './PlaylistTrack.js';
import { playListArr } from '../Array.js';
import * as S from './style/Playlist.S.js'

// ПЛЕЙЛИСТ
const Playlist = () => {
    return (
        <S.CenterBlockContent>
            {/* Титул */}
            <S.ContentTitle>
                <S.PlaylistTitleColTrack>Трек</S.PlaylistTitleColTrack>
                <S.PlaylistTitleColAuthor>ИСПОЛНИТЕЛЬ</S.PlaylistTitleColAuthor>
                <S.PlaylistTitleColAlbum>АЛЬБОМ</S.PlaylistTitleColAlbum>
                <S.PlaylistTitleColTime>
                    <S.PlaylistTitleSvg alt="time">
                        <use href="../img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                </S.PlaylistTitleColTime>
            </S.ContentTitle>
            <S.ContentPlaylist className="content__playlist playlist">
                {/* Трек */}
                {playListArr.tracks.map((track) => (
                    <PlaylistTrack key={track.id} track={track} />
                ))}
            </S.ContentPlaylist>
        </S.CenterBlockContent>
    );
}
export default Playlist