import React from "react";
import { useSelector } from "react-redux";
import {  useSearchParams } from "react-router-dom";
import SearchList from "./SearchList";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const SaerchQuery = searchParams.get("q");

  const SearchListMovies = useSelector((store) => store.movies.searchResults);

  return (
    <div className="bg-gray-900 pt-[100px] h-auto pb-[120px] ">
      <SearchList
        title={"Result of " + SaerchQuery}
        movies={SearchListMovies}
      />
    </div>
  );
};

export default SearchPage;
