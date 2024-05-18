import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


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
        searchResults:null,
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
        },
        getSearchResult:(state,action)=>
        {
            state.searchResults=action.payload;
        }
    }
})
export const {AddnowPlayingMovies,AddVedioTrailer,AddPopularMovies,AddTopRatedMovies,AddUpComingMovies,AddMutetoTrailer,AddwatchpageTrailer,getSearchResult}=movieSlice.actions
export default movieSlice.reducer