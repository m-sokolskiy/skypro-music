import Filter from './Filter';
import Playlist from './Playlist';
import Search from './Search';
import TitlePage from './TitlePage';
import './style/Content.css'

// КОМПОНЕНТ КОНТЕНТ
const Content = () => {
    return (
        <div className="main__centerblock centerblock">
            <Search />
            <TitlePage />
            <Filter />
            <Playlist/>
        </div>
    );
}
export default Content