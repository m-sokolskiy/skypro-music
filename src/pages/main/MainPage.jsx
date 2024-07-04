import Content from "../../components/Content/Content";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import * as S from "./style/MainPage.S"
import { useGetAllTracksQuery } from "../../services/trackAPI";

export const MainPage = () => {

    const { data, error, isLoading } = useGetAllTracksQuery()

    return (
        <S.Wrapper>
            <S.Container>

                <S.Main>
                    <Navigation />
                    <Content tracks={data} error={error} isLoading={isLoading} />
                    <SideBar />
                    <Bar />
                </S.Main>

            </S.Container>
        </S.Wrapper>
    );
};