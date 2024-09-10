import { createBrowserRouter } from "react-router-dom";
import Masterlayout from "./layouts/Masterlayout";
import Body from "./components/Body";
import About from "./components/About";

export const Routing =createBrowserRouter(
    [ 
   
{
  path :"/",
  element :<Masterlayout/>,
  children:[ 
     {
        path :"/",
        element :<Body/>
     },
     {
        path :"about",
        element :<About/>,
      
     }
  ]


}


    ]




)