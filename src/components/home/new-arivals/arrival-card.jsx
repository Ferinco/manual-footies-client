import { Button } from "../../custom/button";

export default function ArrivalCard(props) {
  return (
    <div
      className={`flex ${
        props.index === 1 ? "flex-col-reverse mt-14" : "flex-col mt-0"
      }`}
    >
      <div
        className={`h-[300px] min-w-[300px] object-cover object-center rounded-2xl overflow-hidden ${
          props.index === 1 ? "" : ""
        }`}
      >
        <img src={props.image} className="w-full h-full" />
      </div>
      <div className="flex flex-row justify-between px-3">
        <h1
          className={`text-5xl w-fit z-10  ${
            props.index === 1 ? "-mb-7 " : "-mt-5 "
          }`}
        >
          Gucci slides
        </h1>
        <Button
          title="Buy Now"
          style={`min-w-[115px] ${props.index === 1 ? "-mt-10 " : "mt-3 "}`}
        />
      </div>
    </div>
  );
}
