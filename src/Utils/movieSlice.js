import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        VedioTrailer:null,
    },
    reducers:
    {
        AddnowPlayingMovies:(state,action)=>
        {
            state.nowPlayingMovies=action.payload;
        },
        AddVedioTrailer:(state,action)=>
        {
            state.VedioTrailer=action.payload;
        }
    }
})
export const {AddnowPlayingMovies,AddVedioTrailer}=movieSlice.actions
export default movieSlice.reducer