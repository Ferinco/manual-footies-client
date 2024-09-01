import { useDispatch, useSelector } from "react-redux";
import { UseAppContext } from "../../contexts/context";
import { ShopSettingTabs } from "../../resusables/settingsTabs";
import {
  BannerSlide,
  EditSlide,
  PostSlide,
} from "../../components/custom/dashboard/settingsSlides";

export default function StoreSettings(props) {
  const store = props.store;
  const { settingsTab, setSettingsTab } = UseAppContext();

  const showTab = () => {
    switch (settingsTab) {
      case 0:
        return <BannerSlide />;
        break;
      case 1:
        return <EditSlide />;
        break;
      case 2:
        return <PostSlide />;
        break;
      default:
        return <BannerSlide />;
    }
  };
  return (
    <div
      className={`fixed w-full lg:w-[calc(100vw-250px)] flex flex-col h-[calc(100%-64px)] bottom-0 bg-[#f1f1f1] ${
        props.settingsTab ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col h-[300px] relative w-full overflow-hidden">
        <img
          src={store.billboardImage}
          className="w-full h-full object-top object-cover relative"
          alt="banner-image"
        />
        <div className="absolute px-5 w-full h-full flex flex-col items-start justify-center text-white text-center bg-black/50">
          <h2 className="text-7xl font-bold">{store?.name} Store</h2>
          <h2></h2>
          <p className="text-2xl">{store?.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex gap-8">
          {ShopSettingTabs.map((tab, index) => (
            <button
              key={index}
              onClick={()=> setSettingsTab(tab.id)}
              className={`text-sm ${
                settingsTab === tab.id
                  ? "border-b border-orange-500 text-orange-500 font-semibold"
                  : "font-medium"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {showTab()}
      </div>
    </div>
  );
}
