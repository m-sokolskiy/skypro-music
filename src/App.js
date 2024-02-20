import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { removeToken } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';
import { useNavigate } from 'react-router-dom';

const App = () => {

  //Получает значение ключа "user" из localStorage 
  const userData = window.localStorage.getItem("user");

  //Состояние user хранящее в себе userData=(token)
  const [user, setUser] = useState(userData)

  //Создадим переменную с useNavigate() для простоты использования.
  //useNavigate() перенаправляет пользователя на определенный URL
  const navigate = useNavigate()

  //Функция проверяет значение ключа "user" из localStorage 
  //B если оно имеетеся, то перенаправляет пользователя на главную страницу
  const checkOut = () => {
    const result = localStorage.getItem("user")
    if (result) {
      setUser(true)
      navigate("/main")
      console.log("Работает проверка user")
    }
  }

  //Запускает проверку на user, при запуске приложения 
  useEffect(() => {
    console.log("Запускается useEffect с checkOut")
    checkOut()
  }, [])

  //Выход
  const logout = () => {
    setUser(false);
    removeToken("user")
  }

  return (
    <>
      <AppRoutes user={user} logout={logout} setUser={setUser} />
      <GlobalStyle />
    </>
  );
}

export default App;