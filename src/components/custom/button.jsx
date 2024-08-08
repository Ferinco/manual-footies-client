export const Button = (props) => {
  return <button className={`rounded-3xl px-6 py-3 text-sm ${props.type === "colored" ? "bg-[#0069ff] text-white" : "bg-transparent text-[#264653] border border-black h-fit w-fit"} ${props.style}`}>{props.title}</button>
};
