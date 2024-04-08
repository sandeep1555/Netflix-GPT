import { useDispatch } from "react-redux";
import { AddnowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Utils/useConstant";
const useNowPlayingMovies=()=>
{
    const dispatch=useDispatch();
    const getNowPlayingMovies= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options);
        const json =await data.json();

        dispatch(AddnowPlayingMovies(json.results));
    }
    useEffect(()=>
    {
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies