import * as S from './style/RecommendationList.S.js'

const RecommendationList = ({ item }) => {

    return (
        <S.SidebarItem >
            <S.SidebarLink to={`/selection/${item.id}`}>
                <S.SidebarImg src={item.img} alt={item.alt} />
            </S.SidebarLink>
        </S.SidebarItem>

    )
}
export default RecommendationList