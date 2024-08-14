import { useGetAllSelectionQuery } from '../../services/trackAPI.js';
import RecommendationList from './RecommendationList.jsx';
import * as S from './style/Recommendation.S.js'

const Recommendation = () => {

    const { data } = useGetAllSelectionQuery()

    return (
        <S.SidebarBlock >
            <S.SidebarList >
                {data?.map((item) => (
                    <RecommendationList key={item.id} item={item} />
                ))}
            </S.SidebarList>
        </S.SidebarBlock>
    );
}
export default Recommendation