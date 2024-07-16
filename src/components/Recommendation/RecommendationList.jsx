import * as S from './style/RecommendationList.S.js'

const RecommendationList = ({ item }) => {

    return (
        <S.SidebarItem >
            <S.SidebarLink  to={`/category/${item.id}`} >
               <div>{item.id}</div>
            </S.SidebarLink>
        </S.SidebarItem>

    )
}
export default RecommendationList