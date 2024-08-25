import LeftSide from "./left";
import MobileBanner from "./mobile-banner";
import HeroOverlay from "./overlay";
import RightSide from "./right";

export default function HeroSection(){
    return(
        <div className="flex flex-col md:flex-row h-[90vh] w-screen self-center justify-center md:mt-0 mt-16">
          <LeftSide/>
          <RightSide/>
            {/* <MobileBanner/> */}
        </div>
    )
} 