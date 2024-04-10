import { useDispatch, useSelector } from "react-redux";
import { AddnowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Utils/useConstant";
const useNowPlayingMovies=()=>
{
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);
    const dispatch=useDispatch();
    const getNowPlayingMovies= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options);
        const json =await data.json();

        dispatch(AddnowPlayingMovies(json.results));
    }
    useEffect(()=>
    {
       (!nowPlayingMovies) && getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies