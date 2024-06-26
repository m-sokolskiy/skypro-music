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
export const BarPlayerProgress = styled.input`
--progress-height: 6px;
--progress-color: #b672ff;
--progress-bg-color: #2e2e2e;

margin: 0;
width: 100%;
background: #000;
height: var(--progress-height);
-webkit-appearance: none;
cursor: pointer;
background: transparent;
position: relative;
overflow: hidden;
transition: height 0.3s;

&:hover {
  height: 10px;
  --progress-height: 10px;
}

&::-webkit-slider-runnable-track {
  position: relative;
  height: var(--progress-height);
  background: var(--progress-bg-color);
}

&::-webkit-slider-thumb {
  --thumb-height: 1px;
  --thumb-width: 1px;
  position: relative;
  -webkit-appearance: none;
  width: var(--thumb-width, var(--thumb-height));
  box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax var(--progress-color);
}

&::-webkit-slider-runnable-track {
  background: var(--progress-bg-color);
}

/* FF */

&::-moz-range-track {
  width: 100%;
  height: var(--progress-height);
  background: var(--progress-bg-color);
  border: none;
  border-radius: 0px;
}

&::-moz-range-thumb {
  border: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: transparent;
}

&::-moz-range-progress {
  background-color: var(--progress-color);
  height: var(--progress-height);
}
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
{/* Проигрыватель */ }
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
{/* Иконки */ }
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;

  &:hover{
    cursor: pointer;
    stroke: #b1b3b1;
    fill: #b1b3b1;
  }
`
export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
  
  &:hover{
    cursor: pointer;
    stroke: #b1b3b1;
    fill: #b1b3b1;
  }
`
export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;

  &:hover{
    cursor: pointer;
    stroke: #b1b3b1;
    fill: #b1b3b1;
  }
`
export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;  
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.$isActive ?  "#ffffff" :  '#696969' };

  &:hover{
    cursor: pointer;
    stroke: #acacac;
    fill: #acacac;
  }
`
export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.$isActive ?  "#ffffff" :  '#696969' };

  &:hover{
    cursor: pointer;
    stroke: #acacac;
    fill: #acacac;
  }

`

export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  
  &:hover{
    cursor: pointer;
    background: red;
  }

  &:active{
    background: blue;
  }
`

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;

  &:hover{
    cursor: pointer;
    background: red;
  }

  &:active{
    background: blue;
  }
`

{/* ТРЕК */ }
export const PlayerTrackPlay = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`

{/* ТРЕК */ }
export const TrackPlayLikeDis = styled.div`
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
  margin-left: 26%;
`

export const TrackPlayLike = styled.div`
  padding: 5px;
`
export const TrackPlayDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`
{/* Громкость */ }
export const BarVolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
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
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
`

export const VolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`
export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`
export const VolumeProgress = styled.div`
width: 109px;
`
export const VolumeProgressLine = styled.input`
width: 109px;
`