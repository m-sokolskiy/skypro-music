import { getAllTracks } from "../../Api";
import Bar from "../../components/Bar/Bar";
import Content from "../../components/Content/Content";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/Sidebar/Sidebar";
import * as S from "./style/MainPage.S"

export const MainPage = ({ logout }) => {

    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Navigation logout={logout} />
                    <Content />
                    <SideBar logout={logout} />
                </S.Main>
            </S.Container>
        </S.Wrapper>
    );
};