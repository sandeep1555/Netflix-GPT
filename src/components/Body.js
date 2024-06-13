import { Outlet} from "react-router-dom"

import React, { Suspense, lazy } from "react"
import MainpageShimmer from "../Shimmer/MainpageShimmer";


const Body=()=>
{
  const Footer=React.lazy(()=>import("./Footer"));
    return(
        <div>
    
      <Outlet/>
      <Suspense>
      <Footer/>
      </Suspense>
     

        </div>
    )
}

export default Body