import RecommendationList from './recommendationList.js';
import './style/Recommendation.css'

// РЕКОМЕНДАЦИИ
const Recommendation = () => {

    const RecommendationArr = {
        recommendation: [
            {
                img: '../img/playlist01.png',
                id: 1,
            },
            {
                img: '../img/playlist02.png',
                id: 2,
            },
            {
                img: '../img/playlist03.png',
                id: 3,
            },
        ]
    }

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