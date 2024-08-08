import { Button } from "../../custom/button";
import { SubHeader } from "../../custom/Headers";

export default function Collections() {
  const collections = [
    {
      image: "images/test-1.jpg",
      title: "Men footies",
      about: "Catgories of men slides, shoes and other excellent leather works"
    },
    {
      image: "images/test-1.jpg",
      title: "women footies",
      about: "Catgories of men slides, shoes and other excellent leather works"

    },
    {
      image: "images/test-1.jpg",
      title: "kids foodties",
      about: "Catgories of men slides, shoes and other excellent leather works"

    },
    {
      image: "images/test-1.jpg",
      title: "unisex",
      about: "Catgories of men slides, shoes and other excellent leather works"

    },
  ];
  return (
    <div className="mt-40 flex flex-col gap-10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between">
        <h4>COLLECTIONS</h4>
        <SubHeader style="text-start" title="all unique collections" />
        <p className="hidden lg:flex items-end">
          jgfyur jur hiue ihieyug uygeu
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-4 overflow-x-auto">
        {collections.map((collection, index) => (
          <div
            key={index}
            className={`h-[300px] min-w-[300px] rounded-2xl overflow-hidden relative`}
          >
            <div className="w-full h-full image-div absolute">
              <img
                src={collection.image}
                className="block w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute w-full h-full flex justify-between bg-opacity-30 bg-black/15 text-white">
              <div className="flex flex-row justify-between p-5 items-end w-full">
                <div className="w-3/5 block">
                <h1 className="text-5xl">{collection.title}</h1>
                <p>{collection.about}</p>
                </div>
                <Button title="Explore" style="text-white border-white"></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
