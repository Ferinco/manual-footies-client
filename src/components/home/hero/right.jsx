import { Icon } from "@iconify/react/dist/iconify.js";
import { Socials } from "../../../resusables/socials";
import { Button } from "../../custom/button";
import CarouselControl from "../../custom/carouselControl";

export default function RightSide() {
  return (
    <div className="hidden w-1/4 md:flex flex-col justify-end lg:justify-start items-end absolute top-0 right-0 gap-44 h-full center">
<div className="lg:flex flex-col gap-16 mt-24 hidden">
{
    Socials.map((social)=>(
        <p className="-rotate-90 text-xs font-medium">
            {social.name}
        </p> 
    ))
}
</div>
<CarouselControl/>
    </div>
  );
}