import './App.css'
import Navigation from './components/Navigation.js';
import Content from './components/Content.js';
import SideBar from './components/SideBar.js';
import Bar from './components/Bar.js';



const mainPage = () => {
  return (
    <div className="wrapper">

      <div className="container">

        <main className="main">
          <Navigation />
          <Content />
          <SideBar />
        </main>
        <div>
          <Bar />
        </div>
      </div>

    </div>
  );
}

export default mainPage;