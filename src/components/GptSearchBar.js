import { useSelector } from "react-redux"
import lang from "../Utils/useLanguageConstant"

const GptSearchBar=()=>
{

    const langKey=useSelector(store=>store.config.lang);
    console.log(langKey);
  return (<div className="flex justify-center  ">
       
        <form className="mt-[15%] bg-black w-1/2   grid grid-cols-12 rounded-lg" >
            <input className="px-4 py-4 m-6 col-span-8 rounded-lg" type="text" alt="Gptsearchbar" placeholder={lang[langKey].gptPlaceholder}/>
            <button className="px-4 py-4 m-6 col-span-4  bg-red-600 text-white rounded-lg ">{lang[langKey].search}</button>
        </form>

  </div>)
}

export default GptSearchBar