import { SubHeader } from "../custom/Headers";
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
      <div className="flex gap-5 h-fit relative">
        <LongCard />
        <ShortCard />
      </div>
  );
}
