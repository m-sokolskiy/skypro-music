import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const PlaylistTrack = ({ track }) => {

    const [skeletonTrackName, setSkeletonTrackName] = useState("");
    const [skeletonAuthor, setSkeletonAuthor] = useState("");
    const [skeletonAlbum, setSkeletonAlbum] = useState("");
    const [skeletonTime, setSkeletonTime] = useState("");

    useEffect(() => {
        setTimeout(() => {
            const { trackName, author, album, time } = track;
            setSkeletonTrackName(trackName)
            setSkeletonAuthor(author)
            setSkeletonAlbum(album)
            setSkeletonTime(time)
        }, 5 * 1000)
    }, [track]);

    return (
        <li className="playlist__item" key={track.id}>

            <div className="playlist__track track">

                <div className="track__title">

                    <div className="track__title-image">

                        <svg className="track__title-svg" alt="music">
                            <use href="../img/icon/sprite.svg#icon-note"></use>
                        </svg>

                    </div>

                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">{skeletonTrackName || <Skeleton count={1} width="150px" baseColor='#212121'/>}<span className="track__title-span"></span></a>
                    </div>

                </div>

                <div className="track__author">
                    <a className="track__author-link" href="http://">{skeletonAuthor || <Skeleton count={1} width="150px" baseColor='#212121'/>}</a>
                </div>

                <div className="track__album">
                    <a className="track__album-link" href="http://">{skeletonAlbum || <Skeleton count={1} width="150px" baseColor='#212121'/>}</a>
                </div>

                <div className="track__time">

                    <svg className="track__time-svg" alt="time">
                        <use href="../img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">{skeletonTime || "0:00" }</span>

                </div>
            </div>

        </li>
    )
}
export default PlaylistTrack