import { useRoutes } from "react-router-dom";
import ExternalLayout from "../layouts/external";
import Home from "../pages/home";
import { SignUp } from "../pages/signUp/signUp";

export default function Routes(){
    return useRoutes([
     {
        path: "/",
        element: <ExternalLayout/>,
        children: [
            {path:"/", element : <Home/>}
        ]
     }   ,
     {
        path: "/login",
        // element: </>,
        children: [
            {path:"/login", element : <SignUp/>}
        ]
     }   
    ])
}