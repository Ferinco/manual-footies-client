import { useEffect, useState } from "react";
import { fetchAllCategories, fetchAllProducts } from "../../../utils/api/axios";
import { SubHeader } from "../../custom/Headers";
import ArrivalCard from "./arrival-card";

export default function NewArrival() {
  const [arrivals, setArrivals] = useState([]);
  // const arrivals = [
  //   {
  //     title: "",
  //   },
  //   { title: "" },
  //   { title: "" },
  // ];

  async function GetAllCategories() {
    try {
      const response = await fetchAllProducts();
      setArrivals(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetAllCategories();
  }, []);
  return (
    <div className="mt-40 flex flex-col gap-10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between">
        <h4 className="text-orange-500 font-medium">NEW ARRIVALS</h4>
        <SubHeader style="text-start" title={<span className="capitalize">Be the first to take the <span className="text-orange-500">#news</span></span>} />
        <p className="hidden lg:flex items-end font-medium text-black">
          Our lastest products on here.
        </p>
      </div>
      <div className="flex lg:grid grid-cols-3 gap-4 overflow-x-auto mt-5">
        {arrivals.slice(36, 39).map((arrival, index) => (
          <ArrivalCard index={index} image={arrival.images[0]} />
        ))}
      </div>
    </div>
  );
}
