import * as S from './style/FavoritesPlaylist.S.js';
import SkeletonPlaylist from '../Skeleton/Skeleton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllFavoritesTracksQuery } from '../../services/trackAPI.js';
import { setCurrentTrack } from '../../store/slices/slice.js';
import FavoritePlaylistTrack from './FavoritePlaylistTrack.jsx';


// ПЛЕЙЛИСТ
const FavoritesPlaylist = () => {

    const dispatch = useDispatch()

    const {data, error, isLoading } = useGetAllFavoritesTracksQuery()

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

                <p style={{ color: "red" }}>{error}</p>

                {isLoading ?
                    <S.PlaylistSkeleton>
                        <SkeletonPlaylist />
                    </S.PlaylistSkeleton> :
                    data?.map((track) => {
                        return (
                            <FavoritePlaylistTrack
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
export default FavoritesPlaylist