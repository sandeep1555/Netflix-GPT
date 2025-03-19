import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/useLanguageConstant";
import { useRef, useState } from "react";
import openai from "../Utils/openai";
import {  options } from "../Utils/useConstant";
import { getMovieInfo } from "../Utils/gptSlice";


const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const [errormessage, seterrormessage] = useState(null);
  const [searchloading, setsearchloading] = useState(null);

  const MovieData = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    setsearchloading(true);
    const searchTextValue = searchText.current?.value;

    searchTextValue === ""
      ? seterrormessage(
          "please enter your movie category like funny english movies,action movies...."
        )
      : seterrormessage(null);
    const query =
      "Act as a movie recommendation system and suggest some movies for a query " +
      searchTextValue +
      ".Only give  names of 5 movies,comma seperated like the example result given ahead.Example Result:salaar,darling,bahubali,bahubali 2,saaho ";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      store: true,
      model: "gpt-4o-mini",
    });

    const movieList = chatCompletion?.choices?.[0]?.message?.content.split(",");

    const promiseArray = movieList.map((movie) => MovieData(movie));

    const gptmovieData = await Promise.all(promiseArray);

    searchTextValue &&
      dispatch(getMovieInfo({ movieName: movieList, movieInfo: gptmovieData }));
    setsearchloading(false);
  };
  const handleEntergpt = (event) => {
    if (event.key === "Enter") {
      handleGptSearch();
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mt-[15%] bg-black w-1/2  rounded-lg  pr-[20px] "
      >
        <h1 className="text-white text-center p-4 pt-8 text-3xl">GPT Search</h1>
        <div className="flex  items-center">
          <input
            ref={searchText}
            className="px-4 py-4 m-6 col-span-8 rounded-lg mr-12 ml-10 w-9/12"
            type="text"
            alt="Gptsearchbar"
            placeholder={lang[langKey].gptPlaceholder}
            onKeyDown={handleEntergpt}
          />
          <button
            className="px-12 py-4   col-span-4  bg-red-600 text-white rounded-lg w-3/12  text-center"
            onClick={() => handleGptSearch()}
          >
            {" "}
            {searchloading ? (
              <svg
                aria-hidden="true"
                class="w-6 h-6 mx-4 text-gray-200 animate-spin dark:text-gray-600 fill-red-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              lang[langKey].search
            )}
          </button>
        </div>

        <h1 className="text-red-700 p-4 ">{errormessage}</h1>
      </form>
    </div>
  );
};

export default GptSearchBar;
