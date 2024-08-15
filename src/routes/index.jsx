import { useRoutes } from "react-router-dom";
import ExternalLayout from "../layouts/external";
import Home from "../pages/home";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/signUp";
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
        children: [
            {path:"/login", element : <LoginPage/>},
            {path:"/sign-up", element : <RegisterPage/>},

        ]
     }   
    ])
}