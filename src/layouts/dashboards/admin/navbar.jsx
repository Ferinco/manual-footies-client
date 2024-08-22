import { useSelector } from "react-redux";
import ProfileTile from "../../../components/custom/dashboard/profile";

export default function DashboardNavbar(){
    const user = useSelector((state)=> state.user.user)
    console.log(user)
    return(
        <div className="h-auto flex justify-end items-end p-3">
            <ProfileTile username={user.username} email={user.email}/>
        </div>
    )
}