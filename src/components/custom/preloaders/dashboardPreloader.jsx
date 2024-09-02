import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function DashboardPreloader() {
  const [zoomIn, setZoomIn] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setZoomIn((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-64px)] w-full flex justify-center items-center">
      <Icon
        icon="ion:footsteps-sharp"
        width="10em"
        height="10em"
        style={{ color: "orange" }}
        className={
          zoomIn
            ? "zoom-in duration-1000 scale-50 "
            : "zoom-out duration-1000 scale-75"
        }
      />
    </div>
  );
}
