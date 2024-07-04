import { useGetAllTracksQuery } from '../../services/trackAPI';
import Filter from '../Filter/Filter';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import TitlePage from '../TitlePage/TitlePage';
import * as S from './style/Content.S'

// КОМПОНЕНТ КОНТЕНТ
const Content = () => {

    const { data, error, isLoading } = useGetAllTracksQuery()

    return (
        <S.MainCenterBlock>
            <Search />
            <TitlePage />
            <Filter />
            <Playlist tracks={data} error={error} isLoading={isLoading} />
        </S.MainCenterBlock>
    );
}
export { Content }