import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { removeToken } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './components/context/UserContext.js';

const App = () => {

  const userData = window.localStorage.getItem("user");

  const [user, setUser] = useState(userData)

  const navigate = useNavigate()

  const checkOut = () => {
    const result = localStorage.getItem("user")
    if (result) {
      setUser(true)
      navigate("/main")
      console.log("Работает проверка user")
    }
  }

  useEffect(() => {
    console.log("Запускается useEffect с checkOut")
    checkOut()
  }, [])


  return (
    <>
      {/* Оборачиваем context в компонент Provider и в value передаем нужные данные, для дальнейшего использования в дереву. */}
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;