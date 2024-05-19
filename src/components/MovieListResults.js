import React from 'react'
import { useSelector } from 'react-redux'
import SearchList from './SearchList';

const MovieListResults = () => {


    const movieResults=useSelector(store=>store.movies.movieList);
    console.log(movieResults)

  return (
    <div className='bg-gray-900 pt-[100px] '>

<SearchList title={"Movies"} movies={movieResults}/> 
    </div>
  )
}

export default MovieListResults