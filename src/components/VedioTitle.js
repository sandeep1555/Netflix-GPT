import { useDispatch, useSelector } from "react-redux";
import { AddMutetoTrailer } from "../Utils/movieSlice";
import {  useNavigate } from "react-router-dom";

const VedioTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mute = useSelector((store) => store.movies.muteTotrailer);

  const handleMuteButton = () => {
    dispatch(AddMutetoTrailer());
  };
  const handleplaybutton = () => {
    navigate("/watch?v=" + id);
  };

  const handleMoreInfo = () => {
    navigate("/comingsoon");
  };
  return (
    <div className="pt-[20%] absolute w-screen aspect-video bg-gradient-to-r from-black-300 text-white">
      <h1 className="text-5xl font-bold px-4">{title}</h1>
      <p className="text-lg px-4 w-4/12 py-4">{overview}</p>
      <div className="flex justify-between ">
        <div>
          <button
            className="px-10 py-3 bg-white text-black mx-6 rounded-lg hover:bg-opacity-80"
            onClick={handleplaybutton}
          >
            ▶ Play
          </button>
          <button
            className="px-10 py-3 bg-white text-black mx-3 rounded-lg hover:bg-opacity-80"
            onClick={handleMoreInfo}
          >
            {" "}
            More Info
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="border border-white p-2  mx-4  rounded-[50%]"
            onClick={handleMuteButton}
          >
            {mute ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            )}
          </button>
          <span className="  bg-gray-400 bg-opacity-50 border-l-4 pr-14 py-2 pl-4 ">
            A
          </span>
        </div>
      </div>
    </div>
  );
};

export default VedioTitle;
