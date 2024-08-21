import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { PATH_DASHBOARD } from "../routes/path";
import { useSelector } from "react-redux";

export default function GuestGuard() {
  const isAuthenticated = useSelector((state)=> state.user.isAuthenticated)
  const [redirect] = useSearchParams();
  const redirectUrl = redirect.get("redirect");
  console.log(redirectUrl);
  if (isAuthenticated) {
    if (redirectUrl) {
      return <Navigate to={redirectUrl} replace />;
    }
    return (
      <>
        {(role === "admin" && <Navigate to={PATH_DASHBOARD.admin.index} />) ||
          (role === "user" && <Navigate to={PATH_DASHBOARD.client.index} />)}
      </>
    );
  }

  return <Outlet />;
}
