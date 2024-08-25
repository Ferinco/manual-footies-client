import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductCard(props) {
  return (
    <div className={`h-[350px] ${props.style} flex-col`}>
      <div className="image-div h-4/6 border rounded-2xl overflow-hidden relative">
        <img
          src={props.image}
          className="h-full w-full object-center object-cover absolute"
        />
        <div className="w-full h-full absolute p-3 flex justify-end cursor-pointer bg-black/20">
          <div className="icon-div p-[4px] rounded-[50%] bg-white h-7 w-7 flex justify-center items-center cursor-pointer">
            <Icon
              icon="weui:like-outlined"
              width="1.5em"
              height="1.5em"
              className="text-orange-500"
              // style={{ color: "black" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-3">
        <div className="flex justify-between p-1 items-start">
          <p className="text-sm font-medium w-3/5 leading-[1.1] text-black/80">
          {props.title.length > 30 ? props.title.split('').slice(0, 17).join('') + "..." : props.title}
          </p>
          <div className="icon-div p-[5px] rounded-[50%] bg-transparent h-8 w-8 flex justify-center items-center border border-black cursor-pointer">
            <Icon
              icon="fluent:cart-20-regular"
              width="2em"
              height="2em"
              // style={{ color: "blue" }}
            />
          </div>
        </div>
        <div className="flex justify-start items-start font-semibold -mt-4 text-2xl text-black">
          {props.price}
        </div>
      </div>
    </div>
  );
}
