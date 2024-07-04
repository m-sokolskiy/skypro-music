import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './style/PlaylistTrack.S.js'
import { useSelector } from 'react-redux';
import { useSetLikedMutation } from '../../services/trackAPI.js';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.js';
import { useNavigate } from 'react-router-dom';

const timeTrack = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min <= 10 ? `0${min}` : min;
    sec = sec <= 10 ? `0${sec}` : sec;
    return `${min}:${sec}`;
};

const PlaylistTrack = ({ name, author, album, time, setTrackBar, track, }) => {

    const navigate = useNavigate()

    const isPlaying = useSelector(state => state.player.isPlaying)
    const trackBar = useSelector(state => state.player.currentTrack)
    const [isLiked, setIsLiked] = useState(track.isLiked);
    const [setLiked, { data, error }] = useSetLikedMutation();
    const { setUser } = useContext(UserContext);


    const handelTrackBar = () => {
        setTrackBar()
        console.log(track);
    }

    if (error) {
        setUser(false);
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        navigate("/");
    }

    const handleLiked = (event) => {
        event.stopPropagation()
        setIsLiked(!isLiked)
        const token = JSON.parse(localStorage.getItem("token"))
        setLiked({ id: track.id, token: token.access, state: !isLiked });
        console.log(data);
    }

    return (
        <S.PlaylistItem onClick={() => handelTrackBar()}>

            <S.PlaylistTrack>

                <S.TrackTitle>

                    {/* Изображение */}
                    <S.TrackTitleImage>
                        {trackBar?.id === track.id ? isPlaying ? <S.PlayingAnimation /> : <S.PlayingAnimationPause /> :
                            <S.TrackTitleSvg alt="music">
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
                    <S.LikedBtn onClick={handleLiked}>
                        <S.LikedSvg alt="time" $isActive={isLiked}>
                            <use href="../img/icon/sprite.svg#icon-like"></use>
                        </S.LikedSvg>
                    </S.LikedBtn>

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