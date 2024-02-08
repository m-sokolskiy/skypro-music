import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { getToken } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';

const App = () => {

  const userToken = getToken();
  
  const [token] = useState(userToken)
  

  return (
    <>
      <AppRoutes token={token} />
      <GlobalStyle />
    </>
  );
}

export default App;