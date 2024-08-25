import LeftSide from "./left";
import MobileBanner from "./mobile-banner";
import HeroOverlay from "./overlay";
import RightSide from "./right";

export default function HeroSection(){
    return(
        <div className="flex flex-col md:flex-row h-auto w-screen self-start justify-center">
          <LeftSide/>
          <RightSide/>
            {/* <MobileBanner/> */}
        </div>
    )
} 