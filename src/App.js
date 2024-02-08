import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { removeKeyFromLS } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';
import { useNavigate } from 'react-router-dom';

const App = () => {

  const userData = window.localStorage.getItem("user");
  const [user, setUser] = useState(userData)

  const navigate = useNavigate()

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