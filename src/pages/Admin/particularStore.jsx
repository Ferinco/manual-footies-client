import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchAllStores, filterStore } from "../../redux/slices/stores";
import { UseAppContext } from "../../contexts/context";
import StoreSettings from "./storeSettings";
import DashboardPreloader from "../../components/custom/preloaders/dashboardPreloader";
import { DeleteStoreModal } from "../../components/custom/deleteModal";
import { ShopServices } from "../../services/shopServices";
import { mainApi } from "../../utils/api/axios";

export default function ParticularStore() {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stores);
  const store = state.store;
  const [settingsTab, setSettingsTab] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { activeBar, setActiveBar } = UseAppContext();
  const navigate = useNavigate();
  console.log(storeId);

  useEffect(() => {
    FetchShopsData();
  }, []);
  console.log(store);

  // to fetch filtered store
  const FetchShopsData = async () => {
    await dispatch(filterStore({ id: storeId }));
  };

  //to delete shop
  const DeleteShop = async (storeId) => {
    try {
      const { data } = await mainApi.delete(`/api/v1/shops/${storeId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      navigate("/admin/stores");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {state.isLoading ? (
        <DashboardPreloader />
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
                  {store?.products?.length === 0 ? (
                    ""
                  ) : (
                    <Link className="border border-black px-3 rounded-lg">
                      Upload Products
                    </Link>
                  )}
                  <div className="border border-black px-3 rounded-lg">
                    <Link
                      to=""
                      onClick={() => (setSettingsTab(true), setActiveBar(1))}
                    >
                      Edit Store
                    </Link>
                  </div>
                  <Link
                    className="border border-red-500 px-3 rounded-lg text-red-500"
                    onClick={() => setOpenModal(true)}
                  >
                    Delete
                  </Link>
                </div>
              </div>
              {store?.products?.length === 0 ? (
                <div className="flex flex-col gap-2 justify-center w-full items-center my-10">
                  <p className="text-xl">You have no products in this store</p>
                  <Link className="border border-black p-3 font-semibold rounded-lg" 
                  onClick={()=> (setSettingsTab(true), setActiveBar(2))}>
                    Upload Products
                  </Link>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                  {[...Array(20)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[200px] h-[200px] border border-orange-500"
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <StoreSettings store={store} settingsTab={settingsTab} />
          <DeleteStoreModal
            hide={openModal}
            No={() => setOpenModal(false)}
            Yes={() => DeleteShop(storeId)}
          />
        </>
      )}
    </>
  );
}
