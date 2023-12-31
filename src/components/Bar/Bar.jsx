import BarPlayer from './BarPlayer.jsx';
import * as S from "./style/Bar.S.js"

{/* < audio controls  >
  <source src="/music/song.mp3" type="audio/mpeg" />
</audio > */}

// Проигрыватель
const Bar = ({ trackBar }) => {

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>

          {/* Проигрыватель */}
          <S.BarPlayer >

            <S.PlayerControls>

              {/* Предыдущий */}
              <S.PlayerBtnPrev >
                <S.PlayerBtnPrevSvg alt="prev">
                  <use href="../img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>

              {/* Плей */}
              <S.PlayerBtnPlay >
                <S.PlayerBtnPlaySvg alt="play">
                  <use href="../img/icon/sprite.svg#icon-play"></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>

              {/* Следующий */}
              <S.PlayerBtnNext >
                <S.PlayerBtnNextSvg alt="next">
                  <use href="../img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>

              {/* Повтор */}
              <S.PlayerBtnRepeat >
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use href="../img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>

              {/* Случайный */}
              <S.PlayerBtnShuffle >
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use href="../img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>

            </S.PlayerControls>

            {/* ТРЕК */}

            <S.PlayerTrackPlay>

              {/* Активный трек */}
              <BarPlayer trackBar={trackBar} />


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