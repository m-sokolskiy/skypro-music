import * as S from "./style/CategoryPage.S"
import Search from "../../components/Search/Search";
import Playlist from "../../components/Playlist/Playlist";
import Title from "../../components/Playlist/Title";
import { useGetSelectionOnIdQuery } from "../../services/trackAPI";


export const CategoryPage = () => {

    const { data, error, isLoading } = useGetSelectionOnIdQuery

    return (
        <S.MainCenterBlock>
            <Search />
            <Title data={data} />
            <Playlist tracks={data} error={error} isLoading={isLoading}/>
        </S.MainCenterBlock>
    );
};