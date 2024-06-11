import * as S from './style/FavoritesPlaylist.S.js';
import { useState, useEffect } from 'react';
import SkeletonPlaylist from '../Skeleton/Skeleton.jsx';
import { useDispatch, useSelector } from 'react-redux';


// ПЛЕЙЛИСТ
const FavoritesPlaylist = () => {

    // const dispatch = useDispatch()

    // const [isLoading, setIsLoading] = useState(false);
    // const [errorGetPlayList, setErrorGetPlayList] = useState(null)

    // const tracks = useSelector(state => state.player.trackList)

    // const getTracks = async () => {
    //     try {
    //         setIsLoading(true);
    //         const allTracksData = await getAllTracks();
    //         setIsLoading(false);
    //         dispatch(setTrackList(allTracksData))
    //     } catch (error) {
    //         setErrorGetPlayList("Не удалось получить список треков")
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     getTracks();
    // }, []);

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
                <p >"Здесь должны быть треки"</p>
            </S.ContentPlaylist>

        </S.CenterBlockContent>
    );
}
export default FavoritesPlaylist