import { useDispatch, useSelector } from "react-redux"
import lang from "../Utils/useLanguageConstant"
import { useRef, useState } from "react";
import openai from "../Utils/openai";
import ComingSoon from "./ComingSoon";
import { useNavigate } from "react-router-dom";
import { OPEN_AI_KEY, options } from "../Utils/useConstant";
import { getMovieInfo } from "../Utils/gptSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchBar=()=>
{
  const searchText=useRef(null);
  const dispatch=useDispatch();
  const langKey=useSelector(store=>store.config.lang);
  const [errormessage,seterrormessage]=useState(null);
  
  const MovieData=async(movie)=>
  {
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie,options);
    const json=await data.json();
    return json.results;
  }


  const handleGptSearch=async()=>
  {
    const searchTextValue=searchText.current?.value;

searchTextValue === ''  ? seterrormessage("please type your movie type like funny english movies,action movies...."): seterrormessage(null); 
    const query="Act as a movie recommendation system and suggest some movies for a query "+ searchTextValue+".Only give  names of 5 movies,comma seperated like the example result given ahead.Example Result:salaar,darling,bahubali,bahubali 2,saaho ";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });

const movieList=chatCompletion?.choices?.[0]?.message?.content.split(",");

const promiseArray=movieList.map((movie)=>MovieData(movie));

const   gptmovieData= await Promise.all(promiseArray);


 searchTextValue && dispatch(getMovieInfo({movieName:movieList,movieInfo:gptmovieData}));


  }

  return (

    <div className="flex justify-center  ">
       
        <form onSubmit={(e)=>{e.preventDefault()}} className="mt-[15%] bg-black w-1/2  rounded-lg " >
            <input  ref={searchText} className="px-4 py-4 m-6 col-span-8 rounded-lg w-4/6 mr-10 ml-10" type="text" alt="Gptsearchbar" placeholder={lang[langKey].gptPlaceholder}/>
            <button className="px-4 py-4  col-span-4  bg-red-600 text-white rounded-lg " onClick={()=>handleGptSearch()}>{lang[langKey].search}</button>
 
           <h1 className="text-red-700 p-4 ">{errormessage}</h1>
       
        </form>

       
       
    

          
        </div>

)
}


export default GptSearchBar