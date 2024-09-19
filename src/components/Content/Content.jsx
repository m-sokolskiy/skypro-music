import { useGetAllTracksQuery } from '../../services/trackAPI';
import Filter from '../Filter/Filter';
import Playlist from '../Playlist/Playlist';
import Title from '../Playlist/Title';
import Search from '../Search/Search';
import * as S from './style/Content.S'

// КОМПОНЕНТ КОНТЕНТ
const Content = () => {

    const { data, error, isLoading } = useGetAllTracksQuery()
    const title = "Треки"

    return (
        <S.MainCenterBlock>
            <Search />
            <Title data={title} />
            <Filter />
            <Playlist tracks={data} error={error} isLoading={isLoading} />
        </S.MainCenterBlock>
    );
}
export { Content }