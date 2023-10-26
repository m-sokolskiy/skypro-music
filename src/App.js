import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { getToken } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';

const App = () => {

  const userToken = getToken();
  console.log(userToken);
  const [token] = useState(() => {
    return userToken === "token" ? true : false;
  })

  return (
    <>
      <AppRoutes token={token} />
      <GlobalStyle />
    </>
  );
}

export default App;