import { GlobalStyle } from './GlobalStyle.js';
import { AppRoutes } from './routes.jsx';



const App = () => {
  return (
    <>
      <AppRoutes></AppRoutes>
      <GlobalStyle />
    </>
  );
}

export default App;