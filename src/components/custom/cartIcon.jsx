import { Icon } from "@iconify/react/dist/iconify.js";

export default function CartIcon(){
    return(
        <div className="flex flex-col">
        <Icon icon="system-uicons:cart" width="1.9em" height="1.9em"  style={{color: "black"}} />
<div className="bg-[#0069ff] text-white text-center text-[10px] rounded-[50%] h-4 w-4 flex justify-center items-baseline absolute ml-4 ">
    0
</div>
        </div>
    )
}