import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../routes/path";
import { useEffect } from "react";

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const role = useSelector((state) => state.user.role);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pathname.includes("customer")) {
      if (role === "user") {
        return navigate(PATH_DASHBOARD.client.index, { replace: true });
      }
    }
    if (!pathname.includes("admin")) {
      if (role === "admin") {
        return navigate(PATH_DASHBOARD.admin.index, { replace: true });
      }
    }
  }, [pathname, role, navigate]);

  if (!accessibleRoles.includes(role)) {
    return (
      <div className="container">
        <div className="alert">
          <div className="alert-title">Permission Denied</div>
          <p>You do not have permission to access this page</p>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
