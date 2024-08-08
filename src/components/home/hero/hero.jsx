import Background from "./background";
import MobileBanner from "./mobile-banner";
import HeroOverlay from "./overlay";

export default function HeroSection(){
    return(
        <div className="container flex flex-col relative w-full mt-10 h-auto">
            <Background/>
            <HeroOverlay/>
            <MobileBanner/>
        </div>
    )
} 