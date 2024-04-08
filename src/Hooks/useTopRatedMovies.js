import { useDispatch } from "react-redux";
import { AddTopRatedMovies, AddnowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Utils/useConstant";
const useTopRatedMovies=()=>
{
    const dispatch=useDispatch();
    const getTopRatedMovies= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",options);
        const json =await data.json();

        dispatch(AddTopRatedMovies(json.results));
    }
    useEffect(()=>
    {
        getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies