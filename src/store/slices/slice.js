import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
    name: "tracks",
    initialState: {
        trackList: [],
        currentTrack: null,
    },
    reducers: {
        setTrackList: (state, action) => {
            state.trackList = action.payload
        },
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload
        },

    },
});

const playerReducer = playerSlice.reducer

export const { setTrackList, setCurrentTrack } = playerSlice.actions;
export default playerReducer;