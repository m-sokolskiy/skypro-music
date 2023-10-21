import { RecommendationArr } from '../Array.js';
import RecommendationList from './RecommendationList.jsx';
import * as S from './style/Recommendation.S.js'

// РЕКОМЕНДАЦИИ
const Recommendation = () => {

    return (
        <S.SidebarBlock className="sidebar__block">
            <S.SidebarList className="sidebar__list">
                {/* Рекомендации */}
                {RecommendationArr.recommendation.map((item) => (
                    <RecommendationList key={item.id} item={item} />
                ))}
            </S.SidebarList>
        </S.SidebarBlock>
    );
}
export default Recommendation