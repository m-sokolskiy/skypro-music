import Navigation from './components/Navigation.js';
import './App.css';
import Content from './components/Content.js';
import SideBar from './components/Sidebar.js';



const mainPage = () => {
  return (
    <div className="wrapper">

      <div className="container">

        <main className="main">
          <Navigation/>
          <Content/>
          <SideBar/>
        </main>

      </div>

    </div>
  );
}

export default mainPage;