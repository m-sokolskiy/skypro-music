import Favorites from "../../components/Favorites/Favorites";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import * as S from "./style/FavoritesPage.S"

export const FavoritesPage = () => {

    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Navigation />
                    <Favorites />
                    <SideBar />
                </S.Main>
                <Bar />
            </S.Container>
        </S.Wrapper>
    );
};