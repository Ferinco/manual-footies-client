export default function CarouselControl() {
  return (
    <div className="hidden md:flex flex-col items-end justify-end text-end text-white">
      <p className="text-7xl font-light text-white">02</p>
      <div className="flex gap-3 items-center">
        <span className="text-xs font-medium">PREV</span>
        <div className="flex gap-1">
            <div className="number-div h-6 w-6 flex justify-center items-center text-center bg-gray-300 rounded-[50%] text-xs scale-50">
                1
            </div>
            <div className="number-div h-5 w-5 flex justify-center items-center text-center bg-black rounded-[50%] text-[10px] text-white">
                2
            </div>
            <div className="number-div h-6 w-6 flex justify-center items-center text-center bg-gray-300 rounded-[50%] text-xs scale-50">
                3
            </div> <div className="number-div h-6 w-6 flex justify-center items-center text-center bg-gray-300 rounded-[50%] text-xs scale-50">
                4
            </div>
        </div>
        <span className="text-xs font-medium">NEXT</span>
      </div>
    </div>
  );
}
