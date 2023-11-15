import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { getToken } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';
import { useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState(false)

  const checkOut = () => {
    const result = localStorage.getItem("user")

    if (result) {
      navigate("/")
      setUser(true)
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

  return (
    <>
      <AppRoutes user={user} setUser={setUser} token={token} />
      <GlobalStyle />
    </>
  );
}

export default App;