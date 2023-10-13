import Filter from '../Filter';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import TitlePage from '../TitlePage';
import * as S from './style/Content.S'

// КОМПОНЕНТ КОНТЕНТ
const Content = () => {
    return (
        <S.MainCenterBlock>
            <Search />
            <TitlePage />
            <Filter />
            <Playlist/>
        </S.MainCenterBlock>
    );
}
export default Content