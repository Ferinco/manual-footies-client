import { Icon } from "@iconify/react/dist/iconify.js";
import { AdminLinks } from "../../dashboardlinks";
import { UseAppContext } from "../../../contexts/context";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { activeBar, setActiveBar } = UseAppContext();

  return (
    <div className="h-screen w-[250px] p-2 flex flex-col justify-between admin-sidebar">
      <div>
        <div className="flex p-1 h-16 rounded-xl border border-red-400"></div>
        <div className="sidebar-contents mt-5">
          <div className="flex flex-col gap-3">
            {AdminLinks.map((link, index) => (
              <div
                className={`flex flex-col gap-4 capitalize p-3 rounded-xl text-base ${
                  link.id === activeBar
                    ? "bg-white/75 text-black active-bar font-semibold"
                    : "bg-transparent text-black/75 font-medium"
                }`}
                key={index}
              >
                <Link
                  to={link.link}
                  className="flex gap-3 items-center"
                  onClick={() => setActiveBar(link.id)}
                >
                  {" "}
                  <Icon
                    icon={link.icon}
                    width="1.2em"
                    height="1.2em"
                    //   style={{ color: "black" }}
                  />
                  {link.title}{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className={`flex flex-col gap-4 capitalize p-3 rounded-xl ${
            10 === activeBar
              ? "bg-white text-black"
              : "bg-transparent text-black/75"
          }`}
        >
          <a
            // href={link.link}
            className="flex gap-3 items-center"
            //   onClick={() => setActiveBar(link.id)}
          >
            {" "}
            <Icon
            icon="carbon:settings" 
              width="1.1em"
              height="1.1em"
              //   style={{ color: "black" }}
            />
            Settings{" "}
          </a>
        </div>
        <div
          className={`flex flex-col gap-4 capitalize p-3 rounded-xl ${
            10 === activeBar
              ? "bg-white text-black"
              : "bg-transparent text-black/75"
          }`}
        >
          <a
            // href={link.link}
            className="flex gap-3 items-center"
            //   onClick={() => setActiveBar(link.id)}
          >
            {" "}
            <Icon
            icon="basil:logout-outline"
              width="1.2em"
              height="1.2em"
              //   style={{ color: "black" }}
            />
            Log out{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
