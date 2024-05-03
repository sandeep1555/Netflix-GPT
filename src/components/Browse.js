
import useNowPlayingMovies from "../Hooks/useNowPlayingmovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryConatiner from "./SecondaryConatiner";




const Browse=()=>
{
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