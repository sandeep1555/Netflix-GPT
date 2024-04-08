import { createSlice } from "@reduxjs/toolkit";

const lang=createSlice({
    name:"lang",
    initialState:{
        lang:"en",
    },
    reducers:{
        changelanguage:(state,action)=>
        {
            state.lang=action.payload;
        }
    }
})

export const {changelanguage}= lang.actions
export default lang.reducer