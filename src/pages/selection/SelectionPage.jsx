import * as S from "./style/SelectionPage.S"
import Search from "../../components/Search/Search";
import Playlist from "../../components/Playlist/Playlist";
import Title from "../../components/Playlist/Title";
import { useGetSelectionByIdQuery } from "../../services/trackAPI";
import { useParams } from "react-router-dom";
import { SelectionArr } from "../../lib/selectionArr";

export const SelectionPage = () => {

    const params = useParams();
    const selection = SelectionArr.find((selection) => selection.id === Number(params.id));
    const selectionId = `${selection.id}`;

    const { data, isLoading, error } = useGetSelectionByIdQuery({ id: selectionId })

    return (
        <S.MainCenterBlock>
            <Search />
            <Playlist tracks={data} isLoading={isLoading} error={error}/>
        </S.MainCenterBlock>
    );
};