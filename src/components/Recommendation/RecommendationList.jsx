import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import * as S from './style/RecommendationList.S.js'

const RecommendationList = ({ item }) => {

    const [skeletonImg, setSkeletonImg] = useState("");

    useEffect(() => {
        setTimeout(() => {
            const {img}= item;
            setSkeletonImg(img)
        }, 5 * 1000)
    }, [item]);

    return (
        <S.SidebarItem >
            <S.SidebarLink  href="#">
               {skeletonImg && (<S.SidebarImg src={skeletonImg} alt="day's playlist" />)} 
               {!skeletonImg && <Skeleton count={1} width="250px" height="150px" baseColor='#212121'/>}
            </S.SidebarLink>
        </S.SidebarItem>
    )
}
export default RecommendationList