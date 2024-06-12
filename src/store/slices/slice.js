import { createSlice } from "@reduxjs/toolkit"
import { shuffle } from "../../lib/shuffle";
import { trackApi } from "../../services/trackAPI";

export const playerSlice = createSlice({
    name: "tracks",
    initialState: {
        trackList: [],
        shuffleList: [],
        favoritesList: [],
        currentTrack: null,
        isPlaying: false,
        isShuffle: false,
    },
    reducers: {
        setTrackList: (state, action) => {
            state.trackList = action.payload
        },
        setShuffleList: (state) => {
            const tracks = [...state.trackList]
            const randomArr = shuffle(tracks)
            state.shuffleList = randomArr
        },
        setIsShuffle: (state, action) => {
            state.isShuffle = action.payload
        },
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
        setNextTrack: (state) => {
            const playList = state.isShuffle ? state.shuffleList : state.trackList

            const index = playList.findIndex((t) => t.id === state.currentTrack.id);
            const nextTrack = playList[index + 1]
            if (nextTrack) {
                state.currentTrack = nextTrack
            }
        },
        setPreviousTrack: (state) => {
            const playList = state.isShuffle ? state.shuffleList : state.trackList
            const index = playList.findIndex((t) => t.id === state.currentTrack.id);
            const prevTrack = playList[index - 1]
            if (prevTrack) {
                state.currentTrack = prevTrack
            }
        },
        setFavoritesList: () => {
            
        }
    },
    extraReducers: builder => {
        builder.addMatcher(trackApi.endpoints.getAllTracks.matchFulfilled, (state, {payload}) => {state.trackList = payload})
    }
});

const playerReducer = playerSlice.reducer

export const { setTrackList, setCurrentTrack, setIsPlaying, setNextTrack, setPreviousTrack, setShuffleList, setIsShuffle, setFavoritesList } = playerSlice.actions;
export default playerReducer;