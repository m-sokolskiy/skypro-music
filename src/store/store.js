import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slices/slice";
import { trackApi } from "../services/trackAPI";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        [trackApi.reducerPath]: trackApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([trackApi.middleware]),
});


