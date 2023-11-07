// Ссылки Api
const getAllTrackApi = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
const getOneTrackApi = "https://skypro-music-api.skyeng.tech/catalog/track/";

// Получаем список треков
export const getAllTracks = async () => {
  const response = await fetch(getAllTrackApi, {
    method: "GET",
  })
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

// Авторизация 
export const login = async (email, password) => {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
       return getToken(email, password);
      }
    }).then((data) => console.log(data));
};

// Токен 
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