import { createSlice } from "@reduxjs/toolkit";

const gptSearch=createSlice({
    name:"gptsearch",
    initialState:{
            gptSearch:false,
    },
    reducers:
    {
        changeTopgptSearch:(state,action)=>
        {
            state.gptSearch= !state.gptSearch;
        }
    }
})

export const {changeTopgptSearch}=gptSearch.actions
export default gptSearch.reducer