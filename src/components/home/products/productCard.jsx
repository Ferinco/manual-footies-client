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
              style={{ color: "black" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-3">
        <div className="flex justify-between p-1 items-start">
          <p className="text-sm font-medium w-4/5 leading-[1.1]">
            {props.title}
          </p>
          <div className="icon-div p-[5px] rounded-[50%] bg-transparent h-8 w-8 flex justify-center items-center border border-blue-700 cursor-pointer">
            <Icon
              icon="fluent:cart-20-regular"
              width="2em"
              height="2em"
              style={{ color: "blue" }}
            />
          </div>
        </div>
        <div className="w-full border border-black h-8 rounded-2xl flex justify-center items-center font-semibold">
          {props.price}
        </div>
      </div>
    </div>
  );
}
