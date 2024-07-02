import { getToken } from '../../localStorage';
import { useGetFavoritesTracksQuery } from '../../services/trackAPI';
import Playlist from '../Playlist/Playlist';
import FavoritesTitle from './FavoritesTitle';
import * as S from './style/Favorites.S'

// КОМПОНЕНТ КОНТЕНТ
const Favorites = () => {

    const { data, error, isLoading } = useGetFavoritesTracksQuery({token:getToken("token")})

    return (
        <S.MainCenterBlock>
            <FavoritesTitle />
            <Playlist tracks={data} error={error} isLoading={isLoading} />
        </S.MainCenterBlock>
    );
}
export default Favorites