import { SelectionArr } from '../../lib/selectionArr.js';
import RecommendationList from './RecommendationList.jsx';
import * as S from './style/Recommendation.S.js'

const Recommendation = () => {
    

    return (
        <S.SidebarBlock >
            <S.SidebarList >
                {SelectionArr?.map((item) => (
                    <RecommendationList key={item.id} item={item} />
                ))}
            </S.SidebarList>
        </S.SidebarBlock>
    );
}
export default Recommendation