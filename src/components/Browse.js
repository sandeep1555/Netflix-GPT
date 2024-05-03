
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingmovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import GptSearchPage from "./GptSearchPage"
import { Outlet } from "react-router-dom";


const Browse=()=>
{
  const  changegptPage=useSelector(store=>store.gpt.gptSearch);
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