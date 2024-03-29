const getAllTrackApi = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
const getOneTrackApi = "https://skypro-music-api.skyeng.tech/catalog/track/";

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

export const getTrackId = async (id) => {
  const response = await fetch(`${getOneTrackApi}${id}`, {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const postLogin = async (email, password) => {
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
  if (response.status === 500) {
    throw new Error("Сервер не отвечает")
  }
  if(!response.ok) {
    const error = await response.json()
    throw new Error(error.detail)
  }
  const data = await response.json();
  return data
};

export const postRegister = async (email, password, username) => {
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
  })

  if (response.status === 500) {
    throw new Error("Сервер не отвечает")
  }

  if(!response.ok) {
    const error = await response.json()
    console.log(error);
    throw new Error(error.email || error.password || error.username)
  }

  const data = await response.json();
  console.log(data);
  return data

};

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

  if(!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  const data = await response.json()
  
  return data
};

export const getRefreshToken = async (email, password) => {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json()
  return data
};