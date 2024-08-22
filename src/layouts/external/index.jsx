import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ExternalLayout(){
    return(
        <div className="absolute top-0 left-0 right-0">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    )
}