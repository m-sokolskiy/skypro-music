export const setToken = (token) => {
    // Добавляет значение (ключ по которому нам нужно сохранить значение и само значение)
    window.localStorage.setItem("max", token);
  };
    // Удаляет значение 
  export const removeToken = () => {
    window.localStorage.removeItem("max");
  };
    // Получает значение 
  export const getToken = () => {
    return window.localStorage.getItem("max");
  };