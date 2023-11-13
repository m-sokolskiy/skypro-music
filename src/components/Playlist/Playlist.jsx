import './style/Playlist.S.js'
import 'react-loading-skeleton/dist/skeleton.css'
import PlaylistTrack from './PlaylistTrack.jsx';
import * as S from './style/Playlist.S.js';
import { getAllTracks } from '../../Api.js';
import { useState, useEffect } from 'react';

// ПЛЕЙЛИСТ
const Playlist = ({ setTrackBar }) => {

    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorGetPlayList, setErrorGetPlayList] = useState(null)


    const getTracks = async () => {
        try {
            setIsLoading(true);
            const allTracksData = await getAllTracks();
            await setTracks(allTracksData);
            setIsLoading(false);
        } catch (error) {
            setErrorGetPlayList("Не удалось получить список треков")
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTracks();
    }, []);


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

            <S.ContentPlaylist>
                <p style={{color: "red"}}>
                {errorGetPlayList}
                </p>

                {/* Трек */}

                {tracks.map((track) => {
                    return (
                        <PlaylistTrack
                            isLoading={isLoading}
                            key={track.id}
                            id={track.id}
                            name={track.name}
                            author={track.author}
                            album={track.album}
                            time={track.duration_in_seconds}
                            track={track}
                            setTrackBar={setTrackBar}
                        />
                    )
                }
                )}

            </S.ContentPlaylist>

        </S.CenterBlockContent>
    );
}
export default Playlist