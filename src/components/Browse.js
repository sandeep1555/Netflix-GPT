
import { Outlet } from "react-router-dom";
import useNowPlayingMovies from "../Hooks/useNowPlayingmovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import { useDispatch, useSelector } from "react-redux";
import { changeTopgptSearch } from "../Utils/gptSlice";
import { OPENIAI_KEY_ENV } from "../Utils/useConstant";




const Browse=()=>
{

  const dispatch=useDispatch();
  dispatch(changeTopgptSearch(false));
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
 
    return(
        <div className="flex justify-between overflow-hidden">
            <div>
        
            <PrimaryContainer/>
            <SecondaryConatiner/>
           </div>

          
        </div>
    )
}

export default Browse;