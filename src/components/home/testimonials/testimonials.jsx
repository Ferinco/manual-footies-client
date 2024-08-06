import { SubHeader } from "../../custom/Headers";
import TestimmonialCarousel from "./testimonialcarousel";

export default function Testimonials() {
  return (
    <div className="flex testimonial-bg h-96 w-screen self-center justify-self-start border-red-500 border mt-20 p-8">
      <div className="w-1/2">
      <TestimmonialCarousel/></div>
      <div className="w-1/2">
        <SubHeader title="What our clients say aboutr us" style="text-start w-full"/>
      </div>
    </div>
  );
}
