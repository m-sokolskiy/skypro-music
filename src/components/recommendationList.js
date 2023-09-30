import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const RecommendationList = ({ item }) => {

    const [skeletonImg, setSkeletonImg] = useState("");


    useEffect(() => {
        setTimeout(() => {
            const {img}= item;
            setSkeletonImg(img)
        }, 5 * 1000)
    }, [item]);

    return (
        <li className="sidebar__item">
            <a className="sidebar__link" href="#">
               {skeletonImg && (<img className="sidebar__img" src={skeletonImg} alt="day's playlist" />)} 
               {!skeletonImg && <Skeleton count={1} width="250px" height="150px" baseColor='#212121'/>}
            </a>
        </li>
    )
}
export default RecommendationList