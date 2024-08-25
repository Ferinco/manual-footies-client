import { Button } from "../../custom/button";

export default function LeftSide() {
  return (
    <div className="w-full xl:w-1/2 md:w-2/3 h-auto flex flex-col justify-center gap-5 md:gap-14 items-center md:items-start text-center md:text-start mt-[120px]">
      <div className="flex flex-col gap-3 wrap">
      <h2 className="text-7xl font-bold leading-none">
        Shop the best with{" "}
        <span className="hollow-text text-[75px] font-extrabold">manual footies</span>
      </h2>
      <p className="text-3xl w-3/4">The place for the best handcrafted footwears</p>

      </div>
      <div className="flex gap-3">
      <Button title="Start Shopping!" type="colored" style="text-lg font-medium"/>
      <Button title="Request a Make" style="text-lg font-medium"/>
      </div>
    </div>
  );
}
