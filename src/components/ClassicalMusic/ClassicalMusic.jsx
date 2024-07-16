import Search from '../Search/Search';
import ClassicalMusicTitle from './ClassicalMusicTitle';
import * as S from './style/ClassicalMusic.S'

const ClassicalMusic = () => {

    return (
        <S.MainCenterBlock>
            <Search />
            <ClassicalMusicTitle />
        </S.MainCenterBlock>
    );
}
export { ClassicalMusic }