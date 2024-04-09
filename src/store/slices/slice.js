import {createSlice} from "@reduxjs/toolkit"

const initialState = [];

export const trackSlice = createSlice({
    name:"track",
    initialState,
    reducers: {
        currentTrack: () => {},
        nextTrack: () => {},
        prevTrack: () => {},
        shuffleTrack: () => {},
    }
});

export const {currentTrack, nextTrack, prevTrack, shuffleTrack} = trackSlice.actions;
export default trackSlice.reducer;