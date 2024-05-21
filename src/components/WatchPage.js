import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { options } from "../Utils/useConstant";
import { useDispatch, useSelector } from "react-redux";
import { AddwatchpageTrailer } from "../Utils/movieSlice";
import WatchPageVedio from "./WatchPageVedio";
import WatchpageList from "./WatchpageList";


const WatchPage = () => {
  const dispatch = useDispatch();

  const watchpagevedios = useSelector((store) => store.movies.watchpageTrailer);
  const [searchparams] = useSearchParams();
  const movieId = searchparams.get("v");

  const getWatchpagevedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();
    dispatch(AddwatchpageTrailer(json.results));
  };

  useEffect(() => {
    getWatchpagevedio();
  }, [movieId]);

  return (
    <>
      <div className="pt-[0px]">
        {watchpagevedios && <WatchPageVedio />}

        <WatchpageList />
      </div>
    </>
  );
};

export default WatchPage;
