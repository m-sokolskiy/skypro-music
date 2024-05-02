import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
    name: "tracks",
    initialState: {
        trackList: [],
        currentTrack: null,
        isPlaying: false,
    },
    reducers: {
        setTrackList: (state, action) => {
            state.trackList = action.payload
        },
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
    },
});

const playerReducer = playerSlice.reducer

export const { setTrackList, setCurrentTrack, setIsPlaying } = playerSlice.actions;
export default playerReducer;