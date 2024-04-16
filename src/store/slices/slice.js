import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
    name: "tracks",
    initialState: {
        trackList: [],
        currentTrack: null,
        playingAnimation: null,
    },
    reducers: {
        setTrackList: (state, action) => {
            state.trackList = action.payload
        },
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload
        },
        setPlayingAnimation: (state, action) => {
            state.playingAnimation = action.payload
            console.log(action.payload.id)
        },
    },
});

const playerReducer = playerSlice.reducer

export const { setTrackList, setCurrentTrack, setPlayingAnimation } = playerSlice.actions;
export default playerReducer;