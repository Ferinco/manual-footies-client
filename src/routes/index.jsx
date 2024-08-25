import { useRoutes } from "react-router-dom";
import ExternalLayout from "../layouts/external";
import Home from "../pages/home";
import CustomerDashboardLayout from "../layouts/dashboards/customers";
import CustomerDashboard from "../pages/customers/dashboard";
import AuthGuard from "../guards/authGuard";
import {
  AdminLayout,
  AdminLogin,
  AdminStores,
  ClientLogin,
  SignUp,
} from "../exports";
import RoleBasedGuard from "../guards/roleBasedGuard";
import AdminDashboardLayout from "../layouts/dashboards/admin";
import AdminDashboard from "../pages/Admin/dashboard";
import GuestGuard from "../guards/guestGuard";
export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <ExternalLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/auth",
      element: <GuestGuard />,
      children: [
        { path: "login", element: <ClientLogin /> },
        { path: "admin/login", element: <AdminLogin /> },
      ],
    },
    { path: "/sign-up", element: <SignUp /> },
    {
      path: "/customer",
      element: (
        <AuthGuard>
          <RoleBasedGuard accessibleRoles={"user"}>
            <CustomerDashboardLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [{ path: "", element: <CustomerDashboard /> }],
    },
    {
      path: "/admin",
      element: (
        <AuthGuard>
          <RoleBasedGuard accessibleRoles={"admin"}>
            <AdminLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        { path: "", element: <AdminDashboard /> },
        { path: "stores", element: <AdminStores /> },
      ],
    },
  ]);
}
