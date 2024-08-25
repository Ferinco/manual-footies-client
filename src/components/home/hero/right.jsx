import { Icon } from "@iconify/react/dist/iconify.js";
import { Socials } from "../../../resusables/socials";
import { Button } from "../../custom/button";
import CarouselControl from "../../custom/carouselControl";

export default function RightSide() {
  return (
    <div className="container md:w-1/3 xl:w-1/2 h-full bg-gradient-to-tl from-orange-500 via-15% via-white/25 to-cyan-500 overflow-hidden flex xl:justify-center items-center mt-7 md:mt-0">
      {/* <div className="w-[800px] h-fit block flex-shrink-0 overflow-visible">
        <img
          src="/images/hero-main2.png"
          className="-rotate-[25deg] object-cover object-center w-full h-full"
        />
      </div> */}
      {/* <CarouselControl/> */}
    </div>
  );
}
