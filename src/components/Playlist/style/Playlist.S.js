import styled from "styled-components";

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const ContentPlaylist = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`
export const PlaylistTitleSvg = styled.div`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

export const PlaylistTitleColTrack = styled(PlaylistTitleCol)`
width: 447px;
`
export const PlaylistTitleColAuthor = styled(PlaylistTitleCol)`
width: 321px;
`
export const PlaylistTitleColAlbum = styled(PlaylistTitleCol)`
width: 245px;
`
export const PlaylistTitleColTime = styled(PlaylistTitleCol)`
width: 60px;
text-align: end;
`

export const DataStub = styled.div`

`