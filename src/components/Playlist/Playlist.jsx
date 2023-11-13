import './style/Playlist.S.js'
import 'react-loading-skeleton/dist/skeleton.css'
import PlaylistTrack from './PlaylistTrack.jsx';
import * as S from './style/Playlist.S.js';
import { getAllTracks } from '../../Api.js';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

// ПЛЕЙЛИСТ
const Playlist = () => {
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const getTracks = async () => {

        setIsLoading(true);
        const allTracksData = await getAllTracks();
        await setTracks(allTracksData);
        setIsLoading(false);

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
                        />
                    )
                }
                )}

            </S.ContentPlaylist>

        </S.CenterBlockContent>
    );
}
export default Playlist