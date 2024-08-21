export const Button = (props) => {
  return <button className={`rounded-3xl px-6 py-3 text-sm outline-none ${props.type === "colored" ? "bg-[#0069ff] text-white" : "bg-transparent text-[#264653] border border-black h-fit w-fit"} ${props.style}`}>{props.title}</button>
};
export const FormButton = (props) => {
  return <button className={`rounded-none px-5 py-2 text-sm outline-none max-h-[38px] flex justify-center items-center ${props.styles}`} disabled={props.disabled} >{props.title}</button>
};

