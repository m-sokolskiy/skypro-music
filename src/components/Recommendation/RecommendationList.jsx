import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import * as S from './style/RecommendationList.S.js'

const RecommendationList = ({ item }) => {

    return (
        <S.SidebarItem >
            <S.SidebarLink  to={`/category/${item.id}`} >
               <S.SidebarImg src={item.img} alt="day's playlist" />
            </S.SidebarLink>
        </S.SidebarItem>

    )
}
export default RecommendationList