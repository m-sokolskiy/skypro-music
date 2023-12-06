export const setToken = (token) => {
    // Добавляет значение (ключ по которому нам нужно сохранить значение и само значение)
    window.localStorage.setItem("max", token);
  };
    // Удаляет значение 
  export const removeKeyFromLS = ( key ) => {
    window.localStorage.removeItem(key);
  };
    // Получает значение 
  export const getToken = () => {
    return window.localStorage.getItem("max");
  };