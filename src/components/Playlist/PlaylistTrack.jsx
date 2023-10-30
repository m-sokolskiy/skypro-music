import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './style/PlaylistTrack.S.js'

const timeTrack = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min <= 10 ? `0${min}` : min;
    sec = sec <= 10 ? `0${sec}` : sec;
    return `${min}:${sec}`;
};

const PlaylistTrack = ({ name, author, album, time, feat, id }) => {

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
                        <S.TrackTitleLink href="http://">{name}<S.TrackTitleSpan>{feat}</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitleText>

                </S.TrackTitle>
                {/* Автор */}
                <S.TrackAuthor>
                    <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                {/* Альбом */}
                <S.TrackAlbum >
                    <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
                </S.TrackAlbum>

                <S.TrackTime >

                    <S.TrackTimeSvg alt="time">
                        <use href="../img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>

                    {/* Время */}
                    <S.TrackTimeText >{timeTrack(time)}</S.TrackTimeText>

                </S.TrackTime>

            </S.PlaylistTrack>

        </S.PlaylistItem>
    )
}
export default PlaylistTrack