
import useNowPlayingMovies from "../Hooks/useNowPlayingmovies";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryConatiner from "./SecondaryConatiner";


const Browse=()=>
{
  useNowPlayingMovies();
    return(
        <div className="flex justify-between">
            <div>
            <Header/>
            <PrimaryContainer/>
            <SecondaryConatiner/>

           </div>

          
        </div>
    )
}

export default Browse;