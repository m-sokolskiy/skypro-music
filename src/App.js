import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { removeToken } from './localStorage.js';
import { AppRoutes } from './AppRoutes.jsx';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './components/context/UserContext.js';

const App = () => {

  //Получает значение ключа "user" из localStorage 
  const userData = window.localStorage.getItem("user");

  //Состояние принмающее текущее значение "user"(token)
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
      {/* Оборачиваем context в компонент Provider и в value передаем нужные данные, для дальнейшего использования в дереву. */}
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;