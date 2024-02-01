import styled from "styled-components";

export const PopUpText = styled.a`
  color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  &:hover{
    color: #d9b6ff;
    text-decoration: underline;
    cursor: pointer;

  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`

export const PopUpWindowAuthor = styled.div`
  position: absolute;
  min-width: 228px;
  top: 290px;
  left: 454px;
  z-index: 400;
  padding: 20px 15px;
  border-radius: 20px;
  background: #313131;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const PopUpWindowYear = styled.div`
  position: absolute;
  min-width: 228px;
  top: 290px;
  left: 616px;
  z-index: 400;
  padding: 20px 15px;
  border-radius: 20px;
  background: #313131;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
`

export const PopUpWindowGenre = styled.div`
  position: absolute;
  min-width: 228px;
  top: 290px;
  left: 777px;
  z-index: 400;
  padding: 20px 15px;
  border-radius: 20px;
  background: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`
