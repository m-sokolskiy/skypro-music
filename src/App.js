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

// Выход
  const logout = () => {
    setUser(false);
    removeKeyFromLS("user")
  }

  return (
    <>
      <AppRoutes user={user} logout={logout} setUser={setUser} />
      <GlobalStyle />
    </>
  );
}

export default App;