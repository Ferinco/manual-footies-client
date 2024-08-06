import Background from "./background";
import HeroOverlay from "./overlay";

export default function HeroSection(){
    return(
        <div className="flex flex-col relative w-full mt-10 min-h-screen">
            <Background/>
            <HeroOverlay/>
        </div>
    )
} 