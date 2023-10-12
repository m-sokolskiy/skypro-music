import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



const BarPlayer = ({ track }) => {

  const [skeletonNickname, setSkeletonNickname] = useState("");
  const [skeletonAuthor, setSkeletonAuthor] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const { nickname, author, } = track;
      setSkeletonNickname(nickname)
      setSkeletonAuthor(author)
    }, 5 * 1000)
  }, [track]);

  return (
    <li>

      <div className="track-play__contain">
        {/* Картинка*/}
        <div className="track-play__image">
          <svg className="track-play__svg" alt="music">
            <use href="../img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>

        {/* Трек */}
        <div className="track-play__author">
          <a className="track-play__author-link" href="http://">{skeletonNickname || <Skeleton count={1} width="75px" baseColor='#212121' />}</a>
        </div>

        {/* Автор */}
        <div className="track-play__album">
          <a className="track-play__album-link" href="http://">{skeletonAuthor || <Skeleton count={1} width="75px" baseColor='#212121' />}</a>
        </div>
      </div>

    </li>
  )
}
export default BarPlayer