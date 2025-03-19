import { createSlice } from "@reduxjs/toolkit";

const gptSearch=createSlice({
    name:"gptsearch",
    initialState:{
            gptSearch:null,
            movieInfo:null,
            movieName:null,
    },
    reducers:
    {
        changeTopgptSearch:(state,action)=>
        {
            state.gptSearch= action.payload;
        },
        getMovieInfo:(state,action)=>
        {
            const {movieInfo,movieName}=action.payload;
            state.movieName=movieName;
            state.movieInfo=movieInfo;
        },
        removeMovieInfo:(state)=>
        {
            state.movieInfo=null;
            state.movieName=null;
        }
    }
})

export const {changeTopgptSearch,getMovieInfo,removeMovieInfo}=gptSearch.actions
export default gptSearch.reducer