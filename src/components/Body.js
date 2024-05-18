import { Outlet, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import WatchPage from "./WatchPage"
import Header from "./Header"
import GptSearchPage from "./GptSearchPage"
import { useSelector } from "react-redux"
import { useEffect } from "react"


const Body=()=>
{
  
    return(
        <div>
    
      <Outlet/>

        </div>
    )
}

export default Body