import Filter from '../Filter/Filter';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import TitlePage from '../TitlePage/TitlePage';
import * as S from './style/Content.S'

// КОМПОНЕНТ КОНТЕНТ
const Content = ({ setTrackBar }) => {
    return (
        <S.MainCenterBlock>
            <Search />
            <TitlePage />
            <Filter />
            <Playlist setTrackBar={setTrackBar} />
        </S.MainCenterBlock>
    );
}
export default Content