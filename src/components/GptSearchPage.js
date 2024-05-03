import { BG_URL } from "../Utils/useConstant"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage=()=>
{


    return(<div className="w-screen  h-full  ">
        <div className="absolute -z-10  h-full">
              <img  className="bg-opacity-25 bg-black h-full " src={BG_URL} alt="netflix-bg" />
              </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
    </div>)
}


export default GptSearchPage