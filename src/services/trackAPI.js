import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../localStorage";

export const trackApi = createApi({
    reducerPath: "trackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/",
    }),
    endpoints: (builder) => ({

        getAllTracks: builder.query({
            query: () => "all",
            transformResponse: (result) => {
                return result.map((track) => {
                    const currentUser = getToken("user")
                    const isLiked = !!track.stared_user.find((user) => user.id === currentUser?.id)
                    return {
                        ...track, isLiked
                    }
                })
            },
            providesTags: ['tracks'],
        }),

        getFavoritesTracks: builder.query({
            query: ({ token }) => ({
                url: "favorite/all",
                headers: {
                    Authorization: `Bearer ${token.access}`
                }
            }),
            transformResponse: (result) => {
                return result.map((track) => {
                    return {
                        ...track, isLiked: true
                    }
                })
            },
            providesTags: ['tracks'],
        }),

        setLiked: builder.mutation({
            query: ({ id, token, state }) => ({
                method: `${state ? "POST" : "DELETE"}`,
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: ['tracks'],
        })

    }),
});

export const { useGetAllTracksQuery, useSetLikedMutation, useGetFavoritesTracksQuery } = trackApi;

