import './style/Playlist.S.js'
import PlaylistTrack from './PlaylistTrack.jsx';
import * as S from './style/Playlist.S.js';
import { getAllTracks } from '../../Api.js';
import { useState, useEffect } from 'react';
import SkeletonPlaylist from '../Skeleton/Skeleton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack, setTrackList } from '../../store/slices/slice.js';



// ПЛЕЙЛИСТ
const Playlist = () => {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [errorGetPlayList, setErrorGetPlayList] = useState(null)

    const tracks = useSelector(state => state.player.trackList)

    const getTracks = async () => {
        try {
            setIsLoading(true);
            const allTracksData = await getAllTracks();
            setIsLoading(false);
            dispatch(setTrackList(allTracksData))
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

            {/* Треки */}
            <S.ContentPlaylist>

                <p style={{ color: "red" }}>
                    {errorGetPlayList}
                </p>

                {isLoading ?
                    <S.PlaylistSkeleton>
                        <SkeletonPlaylist />
                    </S.PlaylistSkeleton> :
                    tracks.map((track) => {
                        return (
                            <PlaylistTrack
                                key={track.id}
                                id={track.id}
                                name={track.name}
                                author={track.author}
                                album={track.album}
                                time={track.duration_in_seconds}
                                track={track}
                                setTrackBar={() => dispatch(setCurrentTrack(track))}
                            />
                        )
                    }
                    )}



            </S.ContentPlaylist>

        </S.CenterBlockContent>
    );
}
export default Playlist