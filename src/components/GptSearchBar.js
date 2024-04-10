import { useSelector } from "react-redux"
import lang from "../Utils/useLanguageConstant"
import { useRef } from "react";
import openai from "../Utils/openai";

const GptSearchBar=()=>
{
  const searchText=useRef(null);
  

  const langKey=useSelector(store=>store.config.lang);

  const handleGptSearch=async()=>
  {
    const searchTextValue=searchText.current.value;
    const query="Act as a movie recommendation system and suggest some movies for a query "+ searchTextValue+".Only give  names of 5 movies,comma seperated like the example result given ahead.Example Result:salaar,darling,bahubali,bahubali 2,saaho ";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchTextValue}],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion.choices);

  }

  return (<div className="flex justify-center  ">
       
        <form onSubmit={(e)=>{e.preventDefault()}} className="mt-[15%] bg-black w-1/2   grid grid-cols-12 rounded-lg" >
            <input  ref={searchText} className="px-4 py-4 m-6 col-span-8 rounded-lg" type="text" alt="Gptsearchbar" placeholder={lang[langKey].gptPlaceholder}/>
            <button className="px-4 py-4 m-6 col-span-4  bg-red-600 text-white rounded-lg " onClick={handleGptSearch}>{lang[langKey].search}</button>
        </form>

  </div>)
}


export default GptSearchBar