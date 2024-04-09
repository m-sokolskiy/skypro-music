import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    currentTrack: null,
};

export const trackSlice = createSlice({
    name:"track",
    initialState,
    reducers: {
        currentTrack: (state, action) => {
            state.currentTrack
        },
        nextTrack: () => {},
        prevTrack: () => {},
        shuffleTrack: () => {},
    }
});

export const {currentTrack, nextTrack, prevTrack, shuffleTrack} = trackSlice.actions;
export default trackSlice.reducer;