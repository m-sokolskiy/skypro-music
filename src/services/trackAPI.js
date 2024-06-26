import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const trackApi = createApi({
    reducerPath: "trackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/",
    }),
    endpoints: (builder) => ({

        getAllTracks: builder.query({
            query: () => "all"
        }),

        getFavoritesTracks: builder.query({
            query: () => "favorite/all"
        }),

        setLiked: builder.mutation({
            query: ({id, token, state}) => ({
                method: `${state ? "POST" : "DELETE"}`,
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })

    }),
});

export const { useGetAllTracksQuery, useSetLikedMutation, useGetFavoritesTracksQuery } = trackApi;