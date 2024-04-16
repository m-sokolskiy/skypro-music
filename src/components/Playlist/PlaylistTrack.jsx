import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './style/PlaylistTrack.S.js'
import { useDispatch, useSelector } from 'react-redux';
import { setPlayingAnimation } from '../../store/slices/slice';

// Правильный формат времени
const timeTrack = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min <= 10 ? `0${min}` : min;
    sec = sec <= 10 ? `0${sec}` : sec;
    return `${min}:${sec}`;
};



const PlaylistTrack = ({ name, author, album, time, setTrackBar, track }) => {

    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.player.playingAnimation)

    //Клик на трек и включение Bar
    const handelTrackBar = () => {
        setTrackBar(track)
        dispatch(setPlayingAnimation(track))
        console.log(track);
    }

    return (
        <S.PlaylistItem onClick={() => handelTrackBar()}>

            <S.PlaylistTrack>

                <S.TrackTitle>

                    {/* Изображение */}
                    <S.TrackTitleImage>

                        {isPlaying ? <S.PlayingAnimation /> : <S.TrackTitleSvg alt="music">
                            <use href="../img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>}



                    </S.TrackTitleImage>

                    {/* Трек */}
                    <S.TrackTitleText >

                        <S.TrackTitleLink href="#" >
                            {name}
                            <S.TrackTitleSpan></S.TrackTitleSpan>
                        </S.TrackTitleLink>

                    </S.TrackTitleText>

                </S.TrackTitle>

                {/* Автор */}
                <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">
                        {author}
                    </S.TrackAuthorLink>
                </S.TrackAuthor>

                {/* Альбом */}
                <S.TrackAlbum >
                    <S.TrackAlbumLink href="#">
                        {album}
                    </S.TrackAlbumLink>
                </S.TrackAlbum>

                <S.TrackTime >

                    {/* Лайки */}
                    <S.TrackTimeSvg alt="time">
                        <use href="../img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>

                    {/* Время */}
                    <S.TrackTimeText >
                        {timeTrack(time)}
                    </S.TrackTimeText>

                </S.TrackTime>

            </S.PlaylistTrack>

        </S.PlaylistItem>
    )
}
export default PlaylistTrack