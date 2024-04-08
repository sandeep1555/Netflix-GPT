import { useDispatch } from "react-redux";
import { AddPopularMovies, AddPopularMvoies, AddUpComingMovies} from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Utils/useConstant";
const useUpComingMovies=()=>
{
    const dispatch=useDispatch();
    const getPopularMovies= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",options);
        const json =await data.json();

        dispatch(AddUpComingMovies(json.results));
    }
    useEffect(()=>
    {
        getPopularMovies();
    },[]);
}

export default useUpComingMovies