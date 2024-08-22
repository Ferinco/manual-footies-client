import { useState } from "react";

export const FormInput = (props) => {
    const [focused, setFoucused] = useState(false)
    console.log(focused)
  return (
    <div className={`flex flex-col relative bg-transparent border h-[54px] rounded-lg p-2 ${focused ? "border-black/80" : ""} ${props.styles}`}
    onFocus={()=> setFoucused(true)}>
    <label for="name" className={`z-10 absolute transition-all duration-300 text-sm ${focused ? "-mt-[20px] bg-white font-medium text-sm text-black/80 px-1" : "mt-2 text-gray-400"}`}>{props.label}</label>
      <input
        className={`w-full placeholder:text-black outline-none rounded-md bg-transparent h-full `}
        placeholder={props.holder}
        onChange={props.onChange}
        type={props.type}
        required={props.required}
        id={props.id}
        maxLength={props.maxLength}
        value={props.value}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};
