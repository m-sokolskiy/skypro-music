import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slices/slice";


export const store = configureStore({
    reducer: {
        player: playerReducer,
    },
});
