import { useEffect, useState } from "react";
import { ShopServices } from "../../services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { createNewStore, fetchAllStores } from "../../redux/slices/stores";
import { mainApi } from "../../utils/api/axios";
import { array } from "prop-types";

export default function Stores() {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores.stores);
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem("user");
  console.log(token);
  console.log(stores);
  useEffect(() => {
    FetchShopsData();
  }, []);
  const FetchShopsData = async () => {
    dispatch(fetchAllStores());
  };
  const data = {
    name: "Shoes",
    description: "Amazing shoes",
    billboardImage:
      "https://res.cloudinary.com/dyunxdvmy/image/upload/v1724668344/manual-footies/143261_ylefhg.jpg",
  };
  
  const CreateShop = async () => {
  dispatch(createNewStore(
    data
  ))
  };
  
  return (
    <div className="px-5 w-full overflow-x-hidden">
  <div className=" p-5 fixed w-full lg:w-[calc(100vw-250px)] right-0 self-center justify-self-center bg-white">
    <h3 className="font-semibold text-2xl">Stores</h3>
    <p>Control your stores here.</p>
  </div>
  <div className="store-body overflow-x-visible w-full flex flex-col gap-12 mt-32">
    {stores.map((store) => (
      <div className="store-row flex flex-col gap-2" key={store.name}>
        <div className="flex justify-between">
          <h6>{store.name}</h6>
          <Link className="text-sm">view all</Link>
        </div>
        <div className="products flex gap-3 w-full overflow-x-auto">
          {[...Array(6)].map((_, index) => (
            <div className="product min-w-[200px] h-[200px] border border-red-500" key={index}></div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
