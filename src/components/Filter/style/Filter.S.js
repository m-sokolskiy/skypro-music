import styled from "styled-components";

export const CenterBlockFilter = styled.div`
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
  margin-bottom: 51px;
  gap: 10px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px 9px 20px;

&:hover {
  cursor: pointer;
  border-color: #d9b6ff;
  color: #d9b6ff;
}

&:not(:last-child) {
  margin-right: 10px;
}
`

export const FilterButtonActive = styled(FilterButton)`
  color: #ad61ff;
  border-color: #ad61ff;
  cursor: pointer;

  &:hover{
    color: #ad61ff;
    border-color: #ad61ff;
  }
`;


