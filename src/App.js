import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { getToken, removeKeyFromLS } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';
import { useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState(false)

  const checkOut = () => {
    const result = localStorage.getItem("user")

    if (result) {
      setUser(true)
      navigate("/")
    }
  }

  useEffect(() => {
    checkOut()
  }, [])

  const userToken = getToken();
  console.log(userToken);
  const [token] = useState(() => {
    return userToken === "token" ? true : false;
  })

  const logout = () => {
    setUser(false);
    removeKeyFromLS("user")
  }

  return (
    <>
      <AppRoutes user={user} logout={logout} setUser={setUser} token={token} />
      <GlobalStyle />
    </>
  );
}

export default App;