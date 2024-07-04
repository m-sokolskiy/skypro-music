import { Outlet } from "react-router-dom";
import * as S from "./style/Layout.S"
import Navigation from "../Navigation/Navigation";
import SideBar from "../Sidebar/Sidebar";
import Bar from "../Bar/Bar";

const Layout = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Navigation />
                    <Outlet />
                    <SideBar />
                    <Bar />
                </S.Main>
            </S.Container>
        </S.Wrapper>
    );
}

export { Layout }