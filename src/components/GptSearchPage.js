import { BG_URL } from "../Utils/useConstant"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage=()=>
{


    return(<div >
        <div className="absolute -z-10   ">
              <img  className="bg-opacity-25 bg-black bg-repeat-y " src={BG_URL} alt="netflix-bg" />
              </div>
              <GptSearchBar/>
              
              <GptMovieSuggestion/>
           
           


            
    </div>)
}


export default GptSearchPage