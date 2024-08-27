import { useEffect } from 'react'
import * as S from './style/RecommendationList.S.js'
import { setSelectionId } from '../../localStorage.js'

const RecommendationList = ({ item }) => {

    useEffect(()=>{
        setSelectionId(item.id)
    },[])

    return (
        <S.SidebarItem >
            <S.SidebarLink to={`/selection/${item.id}`}>{item.id}</S.SidebarLink>
        </S.SidebarItem>

    )
}
export default RecommendationList