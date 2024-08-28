import { useNavigate } from 'react-router-dom'
import * as S from './style/RecommendationList.S.js'

const RecommendationList = ({ item }) => {

    return (
        <S.SidebarItem >
            <S.SidebarLink to={`/selection/${item.id}`} >{item.id}</S.SidebarLink>
        </S.SidebarItem>

    )
}
export default RecommendationList