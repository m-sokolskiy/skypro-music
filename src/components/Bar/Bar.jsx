import { useState } from 'react';
import BarPlayer from './BarPlayer.jsx';
import * as S from "./style/Bar.S.js"
import { useRef } from 'react';

// Проигрыватель
const Bar = ({ trackBar }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  //Ссылка на нативный html-элемент <audio>
  const audioRef = useRef(null);

  //Воспроизведение и пауза.
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  //Пауза.
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const togglePlay = isPlaying ? handleStop : handleStart;

  //Зацикливание трека
  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true)
  }

  const toggleLoop = isLoop ? handleLoop : false;


  return (
    <>
      {/* HTML элемент на который мы ссылаемся */}
      <audio ref={audioRef} src={trackBar.track_file} >
        <source src="/music/song.mp3" type="audio/mpeg" loop/>
      </audio>

      <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress></S.BarPlayerProgress>
          <S.BarPlayerBlock>

            {/* Проигрыватель */}
            <S.BarPlayer >

              <S.PlayerControls>

                {/* Предыдущий */}
                <S.PlayerBtnPrev  >
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use href="../img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>

                {/* Плей */}
                <S.PlayerBtnPlay onClick={togglePlay} >
                  <S.PlayerBtnPlaySvg alt={isPlaying ? "pause" : "play"}>
                    <use href={isPlaying ? "../img/icon/sprite.svg#icon-pause" : "../img/icon/sprite.svg#icon-play"}
                    ></use>
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>

                {/* Следующий */}
                <S.PlayerBtnNext >
                  <S.PlayerBtnNextSvg alt="next">
                    <use href="../img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>

                {/* Повтор */}
                <S.PlayerBtnRepeat onClick={toggleLoop}  >
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use href="../img/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>

                {/* Случайный */}
                <S.PlayerBtnShuffle  >
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
    </>
  );
}
export default Bar