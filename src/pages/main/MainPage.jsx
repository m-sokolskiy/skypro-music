import { useState } from "react";
import Content from "../../components/Content/Content";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import * as S from "./style/MainPage.S"

export const MainPage = () => {
    
    //Состояние Bar
    const [trackBar, setTrackBar] = useState(null)

    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <Navigation />
                    <Content trackBar={trackBar} setTrackBar={setTrackBar} />
                    <SideBar />
                </S.Main>
                {trackBar ? <Bar trackBar={trackBar} /> : null}
            </S.Container>
        </S.Wrapper>
    );
};