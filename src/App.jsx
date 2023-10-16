import Navigation from './components/Navigation/Navigation.jsx';
import Content from './components/Content/Content.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import Bar from './components/Bar/Bar.jsx';
import { createGlobalStyle } from 'styled-components';
import * as S from './App.S.js'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button, _btn {
    cursor: pointer;
  }

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("fonts/StratosSkyeng.woff2") format("woff2"),
    url("fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

_btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

_btn-icon:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

_btn-icon:active track-play__like-svg,
_btn-icon:active track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}

`

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