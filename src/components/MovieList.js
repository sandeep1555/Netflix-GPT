import MovieCards from "./MovieCards";

const MovieList=({title,movies})=>
{
   
   return(
    movies &&
   <div className="">
      <h1>{title}</h1>
     <div className="flex overflow-x-scroll">
            
              <div className="flex">
                {movies.map((movie)=>
                (
                   <MovieCards  key={movie.id}  moviePoster={movie.poster_path}/>
                ))
            }
              </div>
              </div>


    </div>)
}

export default MovieList