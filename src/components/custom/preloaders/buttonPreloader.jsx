import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function ButtonPreloader() {
  const [zoomIn, setZoomIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomIn((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <span className="flex justify-center items-center h-full">
      <Icon
        icon="ion:footsteps-sharp"
        width="2em"
        height="2em"
        style={{ color: "white" }}
        className={
          zoomIn
            ? "zoom-in duration-1000 scale-50 "
            : "zoom-out duration-1000 scale-75"
        }
      />
    </span>
  );
}
