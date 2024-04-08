import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptSearchReducer from "./gptSlice"
import configReducer from "./configSlice"
const appStore=configureStore({
   reducer:{
    user:userReducer,
    movies:movieReducer,
    gpt:gptSearchReducer,
    config:configReducer,
   }
})



export default appStore
