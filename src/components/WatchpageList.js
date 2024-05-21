import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const WatchpageList = () => {
    const movies=useSelector(store=>store.movies);
  return (



        movies && 
        <div className="bg-gray-900">
        
        <div className="relative">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
            <MovieList title={"Up Coming"} movies={movies.upComingMovies}/>
            </div>
        </div>
  )
}

export default WatchpageList