import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
    name: "tracks",
    initialState: {
        trackList: [],
        shuffleList: [],
        currentTrack: null,
        isPlaying: false,
    },
    reducers: {
        setTrackList: (state, action) => {
            state.trackList = action.payload
        },
        setShuffleList: (state) => {
            const tracks = state.trackList
            const shuffle = (array) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            };
            const randomArr = shuffle(tracks)
            state.shuffleList = randomArr
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

export const { setTrackList, setCurrentTrack, setIsPlaying, setNextTrack, setPreviousTrack, setShuffleList } = playerSlice.actions;
export default playerReducer;