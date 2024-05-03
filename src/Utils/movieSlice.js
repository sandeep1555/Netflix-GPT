import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        VedioTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        muteTotrailer:false,
        watchpageTrailer:null,
    },
    reducers:
    {
        AddnowPlayingMovies:(state,action)=>
        {
            state.nowPlayingMovies=action.payload;
        },
        AddPopularMovies:(state,action)=>
        {
            state.popularMovies=action.payload;
        },
        AddTopRatedMovies:(state,action)=>
        {
            state.topRatedMovies=action.payload;
        },
        AddUpComingMovies:(state,action)=>
        {
            state.upComingMovies=action.payload;
        },
        AddVedioTrailer:(state,action)=>
        {
            state.VedioTrailer=action.payload;
        },
        AddwatchpageTrailer:(state,action)=>
        {
            state.watchpageTrailer=action.payload;
        },
        AddMutetoTrailer:(state,action)=>
        {
            state.muteTotrailer= !state.muteTotrailer;
        }
    }
})
export const {AddnowPlayingMovies,AddVedioTrailer,AddPopularMovies,AddTopRatedMovies,AddUpComingMovies,AddMutetoTrailer,AddwatchpageTrailer}=movieSlice.actions
export default movieSlice.reducer