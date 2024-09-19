import { getToken } from '../../localStorage';
import { useGetFavoritesTracksQuery } from '../../services/trackAPI';
import Playlist from '../Playlist/Playlist';
import Title from '../Playlist/Title';
import Search from '../Search/Search';
import FavoritesTitle from './FavoritesTitle';
import * as S from './style/Favorites.S'

// КОМПОНЕНТ КОНТЕНТ
const Favorites = () => {

    const { data, error, isLoading } = useGetFavoritesTracksQuery({ token: getToken("token") })
    const title = "Мой плейлист"

    return (
        <S.MainCenterBlock>
            <Search />
            <Title data={title} />
            <Playlist tracks={data} error={error} isLoading={isLoading} />
        </S.MainCenterBlock>
    );
}
export { Favorites }