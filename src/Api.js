import { json } from "react-router-dom";

// Ссылки Api
const getAllTrackApi = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
const getOneTrackApi = "https://skypro-music-api.skyeng.tech/catalog/track/";

// Получаем список треков
export const getAllTracks = async () => {
  const response = await fetch(getAllTrackApi, {
    method: "GET",
  })
  if (!response.ok) {
    throw new Error("Ошибка сервера")
  }
  const data = await response.json();
  return data;
};

// Получаем трек по ID 
export const getTrackID = async (id) => {
  const response = await fetch(`${getOneTrackApi}${id}`, {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  return data;
};

// Авторизация, возвращает token
export const login = async (email, password) => {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      "content-type": "application/json",
    },
  })

  console.log(response);

  //Если рапрос прошел удачно, до выполняется запрос на получение токина
  if (response.ok) {
    const result = await getToken(email, password)
    return result
  }

};

// Получаем токен и сохраняем его в переменную result
export const getToken = async (email, password) => {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json()
  return result
};

// Регистриция  
export const postRegister = async (email, password, username) => {
  console.log(email, password, username);
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json())
    .then((data) => {
      console.log(data)
      //Объект в котором массив из 3-х объектов
      const errorEmail = data.email
      const errorUsername = data.username
      const errorPassword = data.password
      console.log(errorEmail.join())
      
      if (response.status === 400) {
        throw new Error('errorEmail.join()');
        }

    })

};


// if (data.status === 500) {
//   throw new Error("Сервер упал");
// } else if (data.status === 400) {
//   throw new Error(data.email && data.password && data.username)
// }
// if (!response.json().ok) {
//   throw new Error("У вас проблемы с интернетом");
// }