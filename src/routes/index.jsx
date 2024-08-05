import { useRoutes } from "react-router-dom";
import ExternalLayout from "../layouts/external";
import Home from "../pages/home";

export default function Routes(){
    return useRoutes([
     {
        path: "/",
        element: <ExternalLayout/>,
        children: [
            {path:"/", element : <Home/>}
        ]
     }   
    ])
}