import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AdminLogin, ClientLogin } from "../exports";
import { useState } from "react";

export default function AuthGuard({ children }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if(!isAuthenticated){
    if (pathname !== requestedLocation){
        setRequestedLocation(pathname)
    }
    if (pathname.includes("customer")) {
        return <ClientLogin />;
      }
      if (pathname.includes("admin")) {
        return <AdminLogin />;
      }
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }
  return <>{children}</>;
}
