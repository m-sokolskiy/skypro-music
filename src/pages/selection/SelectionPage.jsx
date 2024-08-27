import * as S from "./style/SelectionPage.S"
import Search from "../../components/Search/Search";
import Playlist from "../../components/Playlist/Playlist";
import { useGetSelectionByIdQuery } from "../../services/trackAPI";
import { getSelectionId } from '../../localStorage';


export const SelectionPage = () => {

    const { data, error, isLoading } = useGetSelectionByIdQuery({ id: getSelectionId("selection") })

    return (
        <S.MainCenterBlock>
            <Search />
            <Playlist tracks={data} error={error} isLoading={isLoading} />
        </S.MainCenterBlock>
    );
};