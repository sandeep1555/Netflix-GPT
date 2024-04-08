import MovieCards from "./MovieCards";

const MovieList=({title,movies})=>
{
   
   return(
    movies &&
   <div className=" p-4  w-screen">
      <h1 className="text-3xl my-2 text-white font-bold ">{title}</h1>
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