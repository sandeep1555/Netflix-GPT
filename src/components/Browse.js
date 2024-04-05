import Header from "./Header";
import {  signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse=()=>
{
    return(
        <div className="flex justify-between">
            <div>
            <Header/>
           </div>

          
        </div>
    )
}

export default Browse;