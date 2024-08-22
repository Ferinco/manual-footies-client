import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function AdminDashboard() {
  const user = useSelector((state) => state.user.user);
  const [activeBar, setActiveBar] = useState(0);
  const topBars = [
    {
      icon: "clarity:coin-bag-line",
      title: "Total Sales",
      data: "90,000",
    },
    {
      icon: "lets-icons:order-light",
      title: "Orders",
      data: "324",
    },
    {
      icon: "fluent:people-28-regular",
      title: "Customers",
      data: "700",
    },
    {
      icon: "fluent:people-28-regular",
      title: "Total Goods",
      data: "700",
    },
  ];
  return (
    <Wrapper className="p-5">
      <div>
        <h3 className="font-semibold text-2xl">My Dashboard</h3>
        <p>Welcome to your dashboard, here is an overview of your store data and customers.</p>
      </div>
      <div className="top-divs flex gap-5 mt-5 w-screen lg:w-full overflow-x-auto mt-[50px]">
        {topBars.map((bar, index) => (
          <div
            className={`top-bar w-[270px] flex lg:w-1/4 border rounded-md p-3 justify-between cursor-pointer hover:scale-[1.01] duration-75 flex-shrink-0 xl:flex-shrink ${
              activeBar === index ? "border-[orange]" : ""
            }`}
            key={index}
            onClick={() => setActiveBar(index)}
          >
            <div className="border border-gray-100 p-3">
              <Icon
                icon={bar.icon}
                width="2em"
                height="2em"
                className={activeBar === index ? "text-[orange]" : ""}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium">{bar.title}</p>
              <h6 className="font-bold text-xl">{bar.data}</h6>
            </div>
            <div className="h-full flex justify-end items-end">
              <Icon
                icon="radix-icons:arrow-top-right"
                width="1.2em"
                height="1.2em"
                className="hover:rotate-45"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="middle-div flex flex-col md:flex-row gap-5 mt-[50px]">
        <div className="w-full md:w-8/12 xl:w-9/12 flex flex-col">
          <h6 className="font-medium">Sales Data</h6>
          <div className="h-96 border border-black rounded-md"></div>
        </div>
        <div className="w-full md:w-4/12 xl:w-3/12 flex flex-col">
        <h6 className="font-medium">Transaction History</h6>
          <div className=" h-96 border border-black rounded-md">

          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
