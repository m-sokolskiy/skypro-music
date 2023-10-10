import RecommendationList from './RecommendationList.js';
import './style/Recommendation.css'
import { RecommendationArr } from './Array.js';

// РЕКОМЕНДАЦИИ
const Recommendation = () => {

    return (
        <div className="sidebar__block">
            <ul className="sidebar__list">
                {/* Рекомендации */}
                {RecommendationArr.recommendation.map((item) => (
                    <RecommendationList key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}
export default Recommendation