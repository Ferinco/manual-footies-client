import { Icon } from "@iconify/react/dist/iconify.js";
import { Socials } from "../../resusables/socials";
import { Button } from "../custom/button";
import CarouselControl from "../custom/carouselControl";

export default function RightSide() {
  return (
    <div className="w-1/4 flex flex-col justify-between items-end absolute top-0 right-0 h-full gap-64">
<div className="flex flex-col gap-16 mt-24">
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