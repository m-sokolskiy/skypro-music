import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "./style/BarPlayer.S.js"


const BarPlayer = ({ track }) => {

  const [skeletonNickname, setSkeletonNickname] = useState("");
  const [skeletonAuthor, setSkeletonAuthor] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const { nickname, author, } = track;
      setSkeletonNickname(nickname)
      setSkeletonAuthor(author)
    }, 3 * 1000)
  }, [track]);

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
        <S.TrackPlayAuthorLink href="http://">{skeletonNickname || <Skeleton count={1} width="75px" baseColor='#212121' />}</S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>

      {/* Автор */}
      <S.TrackPlayAlbum >
        <S.TrackPlayAlbumLink href="http://">{skeletonAuthor || <Skeleton count={1} width="75px" baseColor='#212121' />}</S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
};
export default BarPlayer