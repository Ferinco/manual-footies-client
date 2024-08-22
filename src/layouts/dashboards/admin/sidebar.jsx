import { Icon } from "@iconify/react/dist/iconify.js";
import { AdminLinks } from "../../dashboardlinks";
import { UseAppContext } from "../../../contexts/context";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/slices/users";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const { activeBar, setActiveBar } = UseAppContext();
  const dispatch = useDispatch();
  const LogUserOut = async () => {
    try {
      const response = await dispatch(logout());
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-[250px] p-2 hidden lg:flex flex-col justify-between admin-sidebar bg-[#fafafa] fixed">
      <div>
        <div className="flex p-1 h-16 rounded-xl border border-red-400"></div>
        <div className="sidebar-contents mt-5">
          <div className="flex flex-col gap-3">
            {AdminLinks.map((link, index) => (
              <div
                className={`flex flex-col gap-4 capitalize p-3 rounded-xl text-base ${
                  link.id === activeBar
                    ? "bg-[#f1f1f1] text-black active-bar font-semibold"
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
          <Link
            // href={link.link}
            className="flex gap-3 items-center"
            onClick={LogUserOut}
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
          </Link>
        </div>
      </div>
    </div>
  );
}
