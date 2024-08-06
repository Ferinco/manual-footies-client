import LeftSide from "./left";
import RightSide from "./right";

export default function Background() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <h1 className="text-center lg:max-w-3xl leading-[0.9] lg:text-9xl text-7xl md:text-8xl">
          Bato makes what fits your feet
        </h1>
      </div>
      <div className="flex justify-between items-start mt-6">
        <LeftSide />
        <div className="flex justify-center items-center">
          {/* <img src="/images/center.png" /> */}
        </div>
        <RightSide />
      </div>
    </div>
  );
}
