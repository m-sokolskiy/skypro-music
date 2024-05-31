import { useEffect, useState } from 'react';
import BarPlayer from './BarPlayer.jsx';
import * as S from "./style/Bar.S.js"
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsPlaying, setNextTrack, setPreviousTrack } from '../../store/slices/slice.js';

// Проигрыватель
const Bar = () => {

  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isVolume, setIsVolume] = useState("0.3")
  const [isDuration, setIsDuration] = useState(0)
  const [isCurrentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch()

  const trackBar = useSelector(state => state.player.currentTrack)
  const isPlaying = useSelector(state => state.player.isPlaying)

  //Ссылка на нативный html-элемент <audio>
  const audioRef = useRef(null);

  //Воспроизведение.
  const handleStart = () => {
    audioRef.current.play();
    dispatch(setIsPlaying(true))
    console.log(isPlaying)
  };
  //Пауза.
  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false))
    console.log(isPlaying)
  };
  const togglePlay = isPlaying ? handleStop : handleStart;

  //Включить зацикливание трека
  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true)
    console.log(audioRef.current.loop);
  }
  //Отключить зацикливания трека
  const handleDisLoop = () => {
    audioRef.current.loop = false;
    setIsLoop(false)
    console.log(audioRef.current.loop);
  }
  const toggleLoop = isLoop ? handleDisLoop : handleLoop;


  //Включить перемешивание
  const handleShuffle = () => {
    setIsShuffle(true)
  };
  //Отключить перемешивание
  const handleDisShuffle = () => {
    setIsShuffle(false)
  };
  const toggleShuffle = isShuffle ? handleDisShuffle : handleShuffle;

  //Громкость
  const handleVolume = (event) => {
    const volume = audioRef.current.volume = event.target.value
    setIsVolume(volume)
  };

  //Перемотка
  const rewindingTrack = (event) => {
    const rewinding = audioRef.current.currentTime = event.target.value
    setCurrentTime(rewinding)
  };

  //Прогресс 
  const progressTrack = () => {
    let duration = audioRef.current.duration;
    let currentTime = audioRef.current.currentTime;

    setIsDuration(duration);
    setCurrentTime(currentTime);
    if (currentTime === duration) {
      dispatch(setIsPlaying(false))
      dispatch(setNextTrack())
    }
  };

  //Время 
  const timeTrack = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    return `${min}:${sec}`;
  };

  //Вперед 
  const handleNext = () => {
    dispatch(setNextTrack())
  };

  //Назад 
  const handleBack = () => {
    dispatch(setPreviousTrack())
  };


  useEffect(() => {
    if (trackBar) {
      dispatch(setIsPlaying(true));
    };
  }, [trackBar])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isVolume;
    }
  }, [isVolume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isVolume;
    }
  }, [])

  return (
    <>
      {trackBar && <>
        <audio
          ref={audioRef}
          src={trackBar?.track_file}
          onTimeUpdate={progressTrack}
          autoPlay={true} >
          <source src="/music/song.mp3" type="audio/mpeg" />
        </audio>

        <p style={{
          color: "rgba(255,255,255,0.61)",
          position: "absolute",
          bottom: "83px",
          right: "15px"
        }}>
          {isDuration ? `${timeTrack(isCurrentTime)} / ${timeTrack(isDuration)}` : ""}
        </p>

        <S.Bar>
          <S.BarContent>

            {/* Прогресс трека */}
            <S.BarPlayerProgress
              type="range"
              min={0}
              max={isDuration || 0}
              step={0.01}
              value={isCurrentTime}
              onChange={(event) => rewindingTrack(event)}
            >
            </S.BarPlayerProgress>

            {/* Проигрыватель */}
            <S.BarPlayerBlock>
              <S.BarPlayer >

                <S.PlayerControls>

                  {/* Предыдущий */}
                  <S.PlayerBtnPrev onClick={handleBack} >
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
                  <S.PlayerBtnNext onClick={handleNext} >
                    <S.PlayerBtnNextSvg alt="next">
                      <use href="../img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>

                  {/* Повтор */}
                  <S.PlayerBtnRepeat onClick={toggleLoop}  >

                    <S.PlayerBtnRepeatSvg alt="repeat" $isActive={isLoop}>
                      <use xlinkHref="../img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>

                  </S.PlayerBtnRepeat>

                  {/* Случайный */}
                  <S.PlayerBtnShuffle onClick={toggleShuffle} >
                    <S.PlayerBtnShuffleSvg alt="shuffle" $isActive={isShuffle}>
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

                  {/* Регулировка громкости */}
                  <S.VolumeProgress>
                    <S.VolumeProgressLine
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isVolume}
                      onChange={(event) => handleVolume(event)} />
                  </S.VolumeProgress>

                </S.VolumeContent>

              </S.BarVolumeBlock>

            </S.BarPlayerBlock>

          </S.BarContent>

        </S.Bar>
      </>}

    </>
  );
}
export default Bar