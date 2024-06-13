import './style/Playlist.S.js'
import PlaylistTrack from './PlaylistTrack.jsx';
import * as S from './style/Playlist.S.js';
import SkeletonPlaylist from '../Skeleton/Skeleton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack } from '../../store/slices/slice.js';
import { useGetAllTracksQuery } from '../../services/trackAPI.js';



// ПЛЕЙЛИСТ
const Playlist = () => {

    const dispatch = useDispatch()

    const tracks = useSelector(state => state.player.trackList)

    const { error, isLoading } = useGetAllTracksQuery()

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