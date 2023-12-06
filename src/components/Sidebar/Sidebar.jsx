import Recommendation from '../Recommendation/Recommendation.jsx';
import UserProfile from '../UserProfile/UserProfile.jsx';
import * as S from './style/SideBar.S.js'

// БОКОВАЯ ПАНЕЛЬ
const SideBar = ( {logout} ) => {
    return (
        // БОКОВАЯ ПАНЕЛЬ
        <S.MainSidebar >
            <UserProfile logout={logout}/>
            <Recommendation/>
        </S.MainSidebar>
    );
}
export default SideBar