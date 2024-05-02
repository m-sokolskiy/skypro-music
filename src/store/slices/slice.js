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
        setNextTrack: (state) => {
            const index = state.trackList.findIndex((t) => t.id === state.currentTrack.id);
            const nextTrack = state.trackList[index + 1]
            if (nextTrack) {
                state.currentTrack = nextTrack
            } 
        },
        setPreviousTrack: (state) => {
            const index = state.trackList.findIndex((t) => t.id === state.currentTrack.id);
            const prevTrack = state.trackList[index - 1]
            if (prevTrack) {
                state.currentTrack = prevTrack
            } 
        }
    },
});

const playerReducer = playerSlice.reducer

export const { setTrackList, setCurrentTrack, setIsPlaying, setNextTrack, setPreviousTrack } = playerSlice.actions;
export default playerReducer;