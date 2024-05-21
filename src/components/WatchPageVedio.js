import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";

const WatchPageVedio = () => {
  const navigate=useNavigate();
  const watchpagevedios = useSelector((store) => store.movies.watchpageTrailer);
  const Filterclips = watchpagevedios.filter((vedio) => vedio.type === "Clip");

  const clip = Filterclips.length ? Filterclips[0] : watchpagevedios[0];

  const clipkey = clip?.key;
  if (!clipkey) return navigate("/error");
  return (
    <div className="">
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${clipkey}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default WatchPageVedio;
