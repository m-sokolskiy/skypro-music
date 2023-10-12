import './style/Bar.css'
import BarPlayer from './BarPlayer.js';
import { playerArr } from '../Array.js';
import styled from 'styled-components';

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const PlayerBtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
`
export const PlayerBtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
`
export const PlayerBtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
`
export const PlayerBtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
`

export const PlayerBtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

// export const Bar = styled.



// Проигрыватель
const Bar = ({ track }) => {

  return (
    <Bar>
      <BarContent>
        <BarPlayerProgress></BarPlayerProgress> 
        <BarPlayerBlock>

          {/* Проигрыватель */}
          <BarPlayer >

            <PlayerControls>

              <PlayerBtnPrev >

                <svg className="player__btn-prev-svg" alt="prev">
                  <use href="../img/icon/sprite.svg#icon-prev"></use>
                </svg>

              </PlayerBtnPrev>

              <PlayerBtnPlay >

                <svg className="player__btn-play-svg" alt="play">
                  <use href="../img/icon/sprite.svg#icon-play"></use>
                </svg>

              </PlayerBtnPlay>

              <PlayerBtnNext >

                <svg className="player__btn-next-svg" alt="next">
                  <use href="../img/icon/sprite.svg#icon-next"></use>
                </svg>

              </PlayerBtnNext>

              <PlayerBtnRepeat >

                <svg className="player__btn-repeat-svg" alt="repeat">
                  <use href="../img/icon/sprite.svg#icon-repeat"></use>
                </svg>

              </PlayerBtnRepeat>

              <PlayerBtnShuffle >

                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <use href="../img/icon/sprite.svg#icon-shuffle"></use>
                </svg>

              </PlayerBtnShuffle>

            </PlayerControls>

            {/* ТРЕК */}

            <ul className="player__track-play track-play">

                {playerArr.tracks.map((track) => (
                  <BarPlayer key={track.id} track={track} />
                ))}
              
              {/* Лайки */}
              <div className="track-play__like-dis">

                <div className="track-play__like _btn-icon">
                  <svg className="track-play__like-svg" alt="like">
                    <use href="../img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>

                <div className="track-play__dislike _btn-icon">
                  <svg className="track-play__dislike-svg" alt="dislike">
                    <use href="../img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>

              </div>

            </ul>

          </BarPlayer>

          {/* Громкость */}
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use href="../img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input className="volume__progress-line _btn" type="range" name="range" />
              </div>
            </div>
          </div>

        </BarPlayerBlock>

      </BarContent>

    </Bar>
  );
}
export default Bar