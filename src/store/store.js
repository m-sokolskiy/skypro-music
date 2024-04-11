import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/slice"

export const store = configureStore({
    reducer: {
        player: trackReducer,
    },
});
