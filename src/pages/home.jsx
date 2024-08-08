import {
  ArrivalsSection,
  DiscountSection,
  HeroSection,
  ProductsSection,
  ServicesSection,
  TestimonialsSection,
} from "../components/exports";
import Collections from "../components/home/collections/collections";

export default function Home() {
  return (
    <div className="container m-auto flex flex-col h-fit">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <ArrivalsSection/>
      <DiscountSection/>
      <Collections/>
      {/* <TestimonialsSection/> */}
    </div>
  );
}
