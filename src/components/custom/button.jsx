export const Button = (props) => {
  return <button className={`rounded-3xl px-6 py-3 text-sm outline-none ${props.type === "colored" ? "bg-[#0069ff] text-white" : "bg-transparent text-[#264653] border border-black h-fit w-fit"} ${props.style}`}>{props.title}</button>
};
export const FormButton = (props) => {
  return <button className={`h-10 rounded-lg px-5 text-sm outline-none flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-orange-700 bg-orange-500 transition-all duration-150 cursor-pointer ${props.styles}`} disabled={props.disabled} >{props.title}</button>
};

