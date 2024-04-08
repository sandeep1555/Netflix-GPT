import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryConatiner=()=>
{

    const movies=useSelector(store=>store.movies);
 
    return(
    movies && 
    <div className="bg-black">
    
    <div className="-mt-64 z-20 relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Up Coming"} movies={movies.upComingMovies}/>
        </div>
    </div>)
}

export default SecondaryConatiner