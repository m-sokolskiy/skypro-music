import Recommendation from './Recommendation/Recommendation.js';
import UserProfile from './UserProfile';
import './style/SideBar.css'

// БОКОВАЯ ПАНЕЛЬ
const SideBar = () => {
    return (
        // БОКОВАЯ ПАНЕЛЬ
        <div className="main__sidebar sidebar">
            <UserProfile/>
            <Recommendation/>
        </div>
    );
}
export default SideBar