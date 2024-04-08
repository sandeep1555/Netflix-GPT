import { useDispatch } from "react-redux";
import { AddPopularMovies, AddPopularMvoies} from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Utils/useConstant";
const usePopularMovies=()=>
{
    const dispatch=useDispatch();
    const getPopularMovies= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options);
        const json =await data.json();
   
        dispatch(AddPopularMovies(json.results));
    }
    useEffect(()=>
    {
        getPopularMovies();
    },[]);
}

export default usePopularMovies