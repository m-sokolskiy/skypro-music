import { getToken } from '../../localStorage';
import { useGetFavoritesTracksQuery } from '../../services/trackAPI';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import FavoritesTitle from './FavoritesTitle';
import * as S from './style/Favorites.S'

// КОМПОНЕНТ КОНТЕНТ
const Favorites = () => {

    const { data, error, isLoading } = useGetFavoritesTracksQuery({ token: getToken("token") })

    return (
        <S.MainCenterBlock>
            <Search />
            <FavoritesTitle />
            <Playlist tracks={data} error={error} isLoading={isLoading} />
        </S.MainCenterBlock>
    );
}
export { Favorites }