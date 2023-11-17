import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "./style/BarPlayer.S.js"


const BarPlayer = ({ trackBar }) => {

  return (
    <S.TrackPlayContain >
      {/* Картинка*/}
      <S.TrackPlayImage >
        <S.TrackPlaySvg alt="music">
          <use href="../img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>

      {/* Трек */}
      <S.TrackPlayAuthor >
        <S.TrackPlayAuthorLink href="http://">
          {trackBar.name}
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>

      {/* Автор */}
      <S.TrackPlayAlbum >  
        <S.TrackPlayAlbumLink href="http://">
          {trackBar.author}
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
};
export default BarPlayer