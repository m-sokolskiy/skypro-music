export const setToken = (token) => {
  // Добавляет значение (ключ по которому нам нужно сохранить значение и само значение)
  window.localStorage.setItem("user", token);
  console.log(token);
};
// Удаляет значение 
export const removeToken = () => {
  window.localStorage.removeItem("user");
};
// Получает значение 
export const getToken = () => {
  return window.localStorage.getItem("user");
};