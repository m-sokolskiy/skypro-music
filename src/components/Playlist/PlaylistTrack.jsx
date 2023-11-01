import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react';
import * as S from './style/PlaylistTrack.S.js'
import Skeleton from 'react-loading-skeleton';

// Правильный формат времени
const timeTrack = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min <= 10 ? `0${min}` : min;
    sec = sec <= 10 ? `0${sec}` : sec;
    return `${min}:${sec}`;
};

const PlaylistTrack = ({ name, author, album, time, id }) => {

    const [skeletonName, setSkeletonTrackName] = useState("");
    const [skeletonAuthor, setSkeletonAuthor] = useState("");
    const [skeletonAlbum, setSkeletonAlbum] = useState("");
    const [skeletonTime, setSkeletonTime] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTrackName(name)
            setSkeletonAuthor(author)
            setSkeletonAlbum(album)
            setSkeletonTime(timeTrack(time))
        }, 3 * 1000)
    }, []);

    return (
        <S.PlaylistItem>

            <S.PlaylistTrack>

                <S.TrackTitle>

                    {/* Изображение */}
                    <S.TrackTitleImage>
                        <S.TrackTitleSvg alt="music">
                            <use href="../img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>

                    {/* Трек */}
                    <S.TrackTitleText >
                        <S.TrackTitleLink href="http://">
                            {skeletonName || <Skeleton count={1} width="150px" baseColor='#212121' />}
                            <S.TrackTitleSpan></S.TrackTitleSpan>
                        </S.TrackTitleLink>
                    </S.TrackTitleText>

                </S.TrackTitle>

                {/* Автор */}
                <S.TrackAuthor>
                    <S.TrackAuthorLink href="http://">
                        {skeletonAuthor || <Skeleton count={1} width="150px" baseColor='#212121' />}
                    </S.TrackAuthorLink>
                </S.TrackAuthor>

                {/* Альбом */}
                <S.TrackAlbum >
                    <S.TrackAlbumLink href="http://">
                        {skeletonAlbum || <Skeleton count={1} width="150px" baseColor='#212121' />}
                    </S.TrackAlbumLink>
                </S.TrackAlbum>

                <S.TrackTime >

                    {/* Лайки */}
                    <S.TrackTimeSvg alt="time">
                        <use href="../img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>

                    {/* Время */}
                    <S.TrackTimeText >
                        {skeletonTime || "0:00"}
                    </S.TrackTimeText>

                </S.TrackTime>

            </S.PlaylistTrack>

        </S.PlaylistItem>
    )
}
export default PlaylistTrack