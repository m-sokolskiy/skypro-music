import * as S from "./style/SelectionPage.S"
import Search from "../../components/Search/Search";
import Playlist from "../../components/Playlist/Playlist";
import { useGetSelectionByIdQuery } from "../../services/trackAPI";

export const SelectionPage = () => {

    return (
        <S.MainCenterBlock>
            <Search />
            <Playlist  />
        </S.MainCenterBlock>
    );
};