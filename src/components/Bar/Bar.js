import BarPlayer from './BarPlayer.js';
import { playerArr } from '../Array.js';
import * as S from "./style/Bar.S.js"


// Проигрыватель
const Bar = ({ track }) => {

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress> 
        <S.BarPlayerBlock>

          {/* Проигрыватель */}
          <S.BarPlayer >

            <S.PlayerControls>

              <S.PlayerBtnPrev >

                <S.PlayerBtnPrevSvg alt="prev">
                  <use href="../img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>

              </S.PlayerBtnPrev>

              <S.PlayerBtnPlay >

                <S.PlayerBtnPlaySvg alt="play">
                  <use href="../img/icon/sprite.svg#icon-play"></use>
                </S.PlayerBtnPlaySvg>

              </S.PlayerBtnPlay>

              <S.PlayerBtnNext >

                <S.PlayerBtnNextSvg alt="next">
                  <use href="../img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>

              </S.PlayerBtnNext>

              <S.PlayerBtnRepeat >

                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use href="../img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>

              </S.PlayerBtnRepeat>

              <S.PlayerBtnShuffle >

                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use href="../img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>

              </S.PlayerBtnShuffle>

            </S.PlayerControls>

            {/* ТРЕК */}

            <S.PlayerTrackPlay>

                {playerArr.tracks.map((track) => (
                  <BarPlayer key={track.id} track={track} />
                ))}
              
              {/* Лайки */}
              <S.TrackPlayLikeDis>

                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use href="../img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>

                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use href="../img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>

              </S.TrackPlayLikeDis>

            </S.PlayerTrackPlay>

          </S.BarPlayer>

          {/* Громкость */}
          <S.BarVolumeBlock>

            <S.VolumeContent >

              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use href="../img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>

              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>

            </S.VolumeContent>

          </S.BarVolumeBlock>

        </S.BarPlayerBlock>

      </S.BarContent>

    </S.Bar>
  );
}
export default Bar