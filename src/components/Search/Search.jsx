import * as S from './style/Search.S'
// ПОИСК
const Search = () => {
    return (
        <S.CenterBlockSearch>
            <S.SearchSvg >
                <use href="../img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText type="search" placeholder="Поиск" name="search"/>
        </S.CenterBlockSearch>
    );
}
export default Search