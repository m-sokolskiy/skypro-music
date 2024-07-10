export const setToken = (token) => {
  window.localStorage.setItem("user", token);
  console.log(token);
};

export const removeToken = () => {
  window.localStorage.removeItem("user");
};

export const getToken = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return null
  }
};