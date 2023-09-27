import Recommendation from './Recommendation';
import UserProfile from './UserProfile';
import './style/Sidebar.css'

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