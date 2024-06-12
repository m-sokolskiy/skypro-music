import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Добавить трек в избранное по id * https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/ [POST]
//Удалить трек из избранного по id * https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/ [DELETE]
//Получить все избранные треки * https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/ [GET]

//Хранит все запросы 
export const trackApi = createApi({
    reducerPath: "trackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/",
    }),
    endpoints: (builder) => ({

        getAllTracks: builder.query({
            query: () => "all"
        }),

        setLiked: builder.mutation({
            query: ({id, token}) => ({
                method: "POST",
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    }),
});

//Собственно написанный хук
export const { useGetAllTracksQuery, useLazyGetAllTracksQuery, useSetLikedMutation } = trackApi;