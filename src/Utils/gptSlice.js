import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSearch=createSlice({
    name:"gptsearch",
    initialState:{
            gptSearch:false,
            movieInfo:null,
            movieName:null,
    },
    reducers:
    {
        changeTopgptSearch:(state,action)=>
        {
            state.gptSearch= !state.gptSearch;
        },
        getMovieInfo:(state,action)=>
        {
            const {movieInfo,movieName}=action.payload;
            state.movieName=movieName;
            state.movieInfo=movieInfo;
        }
    }
})

export const {changeTopgptSearch,getMovieInfo}=gptSearch.actions
export default gptSearch.reducer