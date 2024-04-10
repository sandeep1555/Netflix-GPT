import { useDispatch, useSelector } from "react-redux";
import { AddPopularMovies} from "../Utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Utils/useConstant";
const usePopularMovies=()=>
{
    const dispatch=useDispatch();
    const popularMovies=useSelector(store=>store.movies.popularMovies);
    const getPopularMovies= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options);
        const json =await data.json();
   
        dispatch(AddPopularMovies(json.results));
    }
    useEffect(()=>
    {
      (!popularMovies) &&  getPopularMovies();
    },[]);
}

export default usePopularMovies