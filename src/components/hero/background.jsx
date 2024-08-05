import LeftSide from "./left";
import RightSide from "./right";

export default function Background() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <h1 className="text-center max-w-3xl leading-[0.9] text-9xl">
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
