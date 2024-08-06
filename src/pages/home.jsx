import { HeroSection, ServicesSection } from "../components/exports"

export default function Home(){
    return(
        <div className="container m-auto flex flex-col h-fit ">
          <HeroSection/>
          <ServicesSection/>
        </div>
    )
}