import { Outlet} from "react-router-dom"
import Footer from "./Footer"


const Body=()=>
{
    return(
        <div>
    
      <Outlet/>
      <Footer/>

        </div>
    )
}

export default Body