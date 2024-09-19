import * as S from "./style/SelectionPage.S"
import Search from "../../components/Search/Search";
import Playlist from "../../components/Playlist/Playlist";
import { useGetSelectionByIdQuery } from "../../services/trackAPI";
import { useParams } from "react-router-dom";
import { SelectionArr } from "../../lib/selectionArr";
import { useEffect } from "react";

export const SelectionPage = () => {

    const params = useParams();
    const selection = SelectionArr.find((selection) => selection.id === Number(params.id));
    const selectionId = `${selection.id}`;
    console.log(` id подборки ${selectionId}`);

    const { data, isLoading, error } = useGetSelectionByIdQuery({ id: selectionId })

    useEffect(() => {
        console.log(`Данные из Апи подборки ${data}`);
      }, [])

    // const data = {
    //     id: 1,
    //     items: [
    //         { item1 },
    //         { item2 }
    //     ],
    //     name: "Название"
    // }

    // const result = data.items.map((item) => {
    //     return {
    //         ...item
    //     }
    // })

    return (
        <S.MainCenterBlock>
            <Search />
            <Playlist tracks={data} isLoading={isLoading} error={error} />
        </S.MainCenterBlock>
    );
};