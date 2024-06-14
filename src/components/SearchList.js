import React from "react";
import { Link } from "react-router-dom";
import MovieCards from "./MovieCards";

const SearchList = ({ title, movies }) => {
  return (
    movies && (
      <div className=" p-4  w-screen">
        <h1 className="text-3xl my-4 mb-[60px] text-white font-bold ">
          {title}
        </h1>
        <div className="flex  overflow-x-scroll">
          <div className="flex flex-wrap">
            {movies.map((movie) => (
              <Link to={"/watch?v=" + movie.id}>
                <MovieCards key={movie.id} moviePoster={movie.poster_path} />
              </Link>
            ))}
          </div>
        </div>
      </div> 
    )
  );
};

export default SearchList;
