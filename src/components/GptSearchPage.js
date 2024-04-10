import { BG_URL } from "../Utils/useConstant"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage=()=>
{


    return(<div className="w-screen ">
        <div className="absolute -z-10">
              <img  className="bg-opacity-25 bg-black" src={BG_URL} alt="netflix-bg" />
              </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
    </div>)
}


export default GptSearchPage