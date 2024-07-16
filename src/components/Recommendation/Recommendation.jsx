import RecommendationList from './RecommendationList.jsx';
import * as S from './style/Recommendation.S.js'

// РЕКОМЕНДАЦИИ
const Recommendation = () => {

    return (
        <S.SidebarBlock >
            <S.SidebarList >
                <RecommendationList />
            </S.SidebarList>
        </S.SidebarBlock>
    );
}
export default Recommendation