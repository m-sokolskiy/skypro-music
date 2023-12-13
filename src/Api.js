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

// then Получает результат запроса, и если все успешно, то выполняется. Главное чтобы отработал запрос. RESPONSE - это то что возвращает наш запрос. Promise - инструмент который помогает мне.

// Авторизация 
export const login = async (email, password) => {
  try {
    // В этой переменной храниться отвте на запрос
    const response = await fetch("https://kypro-music-api.skyeng.tech/user/login/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "content-type": "application/json",
      },
    })
    if (response.ok) {
      return getToken(email, password)
    }

  } catch (error) {
    return error;
  }
}



// Токен 
export const getToken = async (email, password) => {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      // Формат
      "content-type": "application/json",
    },
  });
  const result = await response.json()
  //Положим значение
  localStorage.setItem("user", JSON.stringify(result))
  return result
};

// Регистриция  
export const registration = async (email, password, username) => {
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
    .then((json) => console.log(json));
};