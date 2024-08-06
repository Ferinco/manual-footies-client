import { SubHeader } from "../../components/custom/Headers";

export default function Footer() {
  const stores = [
    {
      store: "shoes",
      link: "",
    },
    {
      store: "women",
      link: "",
    },
    {
      store: "bags",
      link: "",
    },
    {
      store: "children",
      link: "",
    },
    {
      store: "slides",
      link: "",
    },
  ];
  const collections = [
    {
      store: "new arrivals",
      link: "",
    },
    {
      store: "festive deals",
      link: "",
    },
    {
      store: "discounts",
      link: "",
    },
  ];
  return (
    <div className="h-fit w-screen self-center justify-self-start flex flex-col bg-black py-7 px-12 text-white mt-20">
      <div className="flex gap-20">
        <div className="w-1/3 flex flex-col gap-4">
          <SubHeader
            title="MAnual Footies gydguid"
            style="text-white text-4xl"
          />
          <div className="flex flex-row text-white gap-3">
            <h4>STORE</h4>
            <p>
              72, cresent way off alabama roda, ijinakin, aporo, Abeokuta, Ogfun
              State
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-2/3">
          <div className="flex flex-col gap-3">
            <h2>STORES</h2>
            <div>
              {stores.map((store) => (
                <p>{store.store}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2>STORES</h2>
            <div>
              {stores.map((store) => (
                <p>{store.store}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2>COLLECTIONS</h2>
            <div>
              {collections.map((collection) => (
                <p>{collection.store}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2>COLLECTIONS</h2>
            <div>
              {collections.map((collection) => (
                <p>{collection.store}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
