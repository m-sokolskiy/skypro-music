import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import FavoritesPlaylist from './FavoritesPlaylist';
import FavoritesTitle from './FavoritesTitle';
import * as S from './style/Favorites.S'

// КОМПОНЕНТ КОНТЕНТ
const Favorites = () => {
    return (
        <S.MainCenterBlock>
            <Search />
            <FavoritesTitle />
            <Filter />
            <FavoritesPlaylist  />
        </S.MainCenterBlock>
    );
}
export default Favorites