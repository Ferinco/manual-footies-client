import { SubHeader } from "../../custom/Headers";
import { LongCard, ShortCard } from "./service-card";

export default function Services() {
  const services = [
    {
      image: "",
      title: "",
      info: "",
    },
    {
      image: "",
      title: "",
      info: "",
    },
    {
      image: "",
      title: "",
      info: "",
    },
  ];
  return (
      <div className="flex lg:flex-row flex-col gap-5 h-fit relative mt-20 md:mt-[300px] lg:mt-[170px]">
        <LongCard />
        <ShortCard />
      </div>
  );
}
