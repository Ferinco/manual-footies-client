import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import DashboardNavbar from "./navbar";

export default function AdminDashboardLayout() {
  return (
    <div className="flex bg-[#f1f1f1]">
      <Sidebar />
      <div className="w-[calc(100vw-250px)] flex flex-col">
        <DashboardNavbar/>
        <Outlet />
      </div>
    </div>
  );
}
