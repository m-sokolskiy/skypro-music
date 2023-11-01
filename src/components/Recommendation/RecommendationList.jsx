import { useState } from 'react';
import { delay, runLoad, load } from '../Skeleton/loadStart.js';
import * as S from './style/RecommendationList.S.js'
import SkeletonSideBar from '../Skeleton/SkeletonSideBar.jsx';

const RecommendationList = ({ item }) => {

    const [loadState, getLoad] = useState(load);

    const preLoad = () => {
        setTimeout(() => {
<<<<<<< HEAD
            const {img}= item;
            setSkeletonImg(img)
        }, 3 * 1000)
    }, [item]);
=======
            runLoad(load);
            getLoad(() => {
                loadState ? loadState : !loadState;
            });
        }, delay);
    };

    preLoad();
>>>>>>> a328234313dc88166e23c6a18ca4983369bc885d

    return (
        <S.SidebarItem >

            <S.SidebarLink to={`/category/${item.id}`} >

                {loadState ? (<SkeletonSideBar height={150} weight={250} />) : (<S.SidebarImg src={item.img} alt="day's playlist" />)}

            </S.SidebarLink>

        </S.SidebarItem>

    )
}
export default RecommendationList