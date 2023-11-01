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

const PlaylistTrack = ({ track }) => {

    const [skeletonTrackName, setSkeletonTrackName] = useState("");
    const [skeletonAuthor, setSkeletonAuthor] = useState("");
    const [skeletonAlbum, setSkeletonAlbum] = useState("");
    const [skeletonTime, setSkeletonTime] = useState("");

    useEffect(() => {
        setTimeout(() => {
            const { trackName, author, album, time } = track;
            setSkeletonTrackName(trackName)
            setSkeletonAuthor(author)
            setSkeletonAlbum(album)
            setSkeletonTime(time)
        }, 5 * 1000)
    }, [track]);

    return (
        <S.PlaylistItem>

            <S.PlaylistTrack>

                <S.TrackTitle>

                    <S.TrackTitleImage>
                        <S.TrackTitleSvg alt="music">
                            <use href="../img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitleText >
                        <S.TrackTitleLink href="http://">{skeletonTrackName || <Skeleton count={1} width="150px" baseColor='#212121'/>}<S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitleText>

                </S.TrackTitle>
                <S.TrackAuthor>
                    <S.TrackAuthorLink href="http://">{skeletonAuthor || <Skeleton count={1} width="150px" baseColor='#212121'/>}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum >
                    <S.TrackAlbumLink href="http://">{skeletonAlbum || <Skeleton count={1} width="150px" baseColor='#212121'/>}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime className="track__time">
                    <S.TrackTimeSvg alt="time">
                        <use href="../img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText >{skeletonTime || "0:00" }</S.TrackTimeText>
                </S.TrackTime>

            </S.PlaylistTrack>

        </S.PlaylistItem>
    )
}
export default PlaylistTrack