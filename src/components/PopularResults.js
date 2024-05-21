import React from "react";
import { useSelector } from "react-redux";
import SearchList from "./SearchList";

const PopularResults = () => {
  const PopularMovies = useSelector((store) => store.movies.popularList);

  return (
    <div className="bg-gray-900 pt-[100px] ">
      <SearchList title={"New & Popular Movies"} movies={PopularMovies} />
    </div>
  );
};

export default PopularResults;
