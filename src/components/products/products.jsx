import { Button } from "../custom/button";
import { SubHeader } from "../custom/Headers";
import ProductCard from "./productCard";

export default function Products() {
  const tabs = [
    {
      name: "all",
      id: 0,
    },
    {
      name: "slides",
      id: 1,
    },
    {
      name: "shoes",
      id: 2,
    },
    {
      name: "sandals",
      id: 3,
    },
    {
        name: "belts",
        id: 4,
      },
      {
        name: "women's",
        id: 5,
      },
      {
        name: "children",
        id: 6,
      },
      {
        name: "bags",
        id: 7,
      },
  ];
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="mt-20 flex flex-col gap-10">
      <div className="flex justify-between">
        <SubHeader style="text-start" title="Always choose the best" />
        <div className="lg:max-w-[300px]">
          <p>
            lhiueuife ugteuge huyeourgeuy egroueoref ggeufeyuey bghjge egeoregr
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        {
            tabs.map((tab, index)=>(
               <button className="rounded-3xl px-6 py-3 text-base uppercase font-semibold bg-transparent border-2 border-black" key={index}>{tab.name}</button>
            ))
        }
      </div>
      <div className="products-body grid grid-cols-5 gap-4">
        {items.map((item, index) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}
