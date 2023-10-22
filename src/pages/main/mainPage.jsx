import Bar from "../../components/Bar/Bar";
import Content from "../../components/Content/Content";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/Sidebar/Sidebar";
import * as S from "./style/mainPage.S"

export const MainPage = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Navigation />
                    <Content />
                    <SideBar />
                </S.Main>
                <Bar />
            </S.Container>
        </S.Wrapper>
    );
};