import Search from '../Search/Search';
import RockMusicTitle from './RockMusicTitle';
import * as S from './style/RockMusic.S'

const RockMusic = () => {

    return (
        <S.MainCenterBlock>
            <Search />
            <RockMusicTitle />
        </S.MainCenterBlock>
    );
}
export { RockMusic }