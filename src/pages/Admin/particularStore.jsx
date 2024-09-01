import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllStores, filterStore } from "../../redux/slices/stores";
import { UseAppContext } from "../../contexts/context";
import StoreSettings from "./storeSettings";

export default function ParticularStore() {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stores);
  const store = state.store;
  const [ settingsTab, setSettingsTab ] = useState(false);
  console.log(store);

  useEffect(() => {
    FetchShopsData();
  }, []);
  console.log(store);

  // to fetch filtered store
  const FetchShopsData = async () => {
    await dispatch(filterStore({ id: storeId }));
  };

  return (
    <>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="px-5 w-full">
            <div className="flex flex-col h-[350px] relative rounded-lg overflow-hidden">
              <img
                src={store?.billboardImage}
                className="w-full h-full object-top object-cover rounded-lg relative"
                alt="banner-image"
              />
              <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg text-white text-center bg-black/50">
                <h2 className="text-7xl font-bold">{store?.name}</h2>

                <p className="text-2xl">{store?.description}</p>
              </div>
            </div>
            <div className="flex flex-col p-3">
              <div className="flex justify-between mt-8 items-center">
                <h6 className="font-semibold">
                  Featured products ({store?.products?.length})
                </h6>
                <div className="flex gap-2">
                  <div className="border border-black px-3 rounded-lg">
                    <Link to="">upload products</Link>
                  </div>
                  <div className="border border-black px-3 rounded-lg">
                    <Link to="" onClick={() => setSettingsTab(true)}>
                      settings
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                {[...Array(20)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[200px] h-[200px] border border-orange-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <StoreSettings store={store} settingsTab={settingsTab}/>
        </>
      )}
    </>
  );
}
