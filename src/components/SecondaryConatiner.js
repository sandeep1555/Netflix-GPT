import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryConatiner=()=>
{

    const movies=useSelector(store=>store.movies);
 
    return(
    movies && <div>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    </div>)
}

export default SecondaryConatiner