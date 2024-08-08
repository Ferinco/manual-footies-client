import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../../utils/api/axios";
import { Button } from "../../custom/button";
import { SubHeader } from "../../custom/Headers";
import ProductCard from "./productCard";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function Products() {
  //get items
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GetProducts();
  }, []);
  async function GetProducts() {
    try {
      const response = await fetchAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(products);
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
  return (
    <div className="mt-32 flex flex-col gap-10 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between">
        <SubHeader style="text-start" title="Always choose the best" />
        <div className="sm:max-w-[300px]">
          <p>
            lhiueuife ugteuge huyeourgeuy egroueoref ggeufeyuey bghjge egeoregr
          </p>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            className="rounded-3xl px-6 py-3 text-base uppercase font-semibold bg-transparent border-2 border-black"
            key={index}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="products-body grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.slice(0, 9).map((item, index) => (
          <ProductCard
            image={item.images[0]}
            title={item.title}
            price={
              <p className="flex flex-row items-center">
                <Icon
                  icon="tabler:currency-naira"
                  width="1.2em"
                  height="1.2em"
                  className="mb-[2px]"
                  style={{ color: "inherit" }}
                />
                {item.price}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
}
