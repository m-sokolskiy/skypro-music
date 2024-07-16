import Search from '../Search/Search';
import ElectroMusicTitle from './ElectroMusicTitle';
import * as S from './style/ElectroMusic.S'

const ElectroMusic = () => {

    return (
        <S.MainCenterBlock>
            <Search />
            <ElectroMusicTitle />
        </S.MainCenterBlock>
    );
}
export { ElectroMusic }