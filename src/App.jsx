import Navigation from './components/Navigation/Navigation.jsx';
import Content from './components/Content/Content.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import Bar from './components/Bar/Bar.jsx';
import { GlobalStyle } from './GlobalStyle.js';
import * as S from './App.S.js'



const mainPage = () => {
  return (
    <S.Wrapper>
      <GlobalStyle />
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
}

export default mainPage;