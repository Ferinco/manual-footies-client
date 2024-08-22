import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import DashboardNavbar from "./navbar";

export default function AdminDashboardLayout() {
  return (
    <div className="flex flex-row bg-white relative">
      <Sidebar />
      <div className="w-full lg:w-[calc(100vw-250px)] flex flex-col h-screen lg:ml-[250px]">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
}
