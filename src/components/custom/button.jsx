export const Button = (props) => {
  return (
    <button
      className={`rounded-3xl px-6 py-3 text-sm outline-none border-2 ${
        props.type === "colored"
          ? "bg-orange-500 text-white hover:bg-gradient-to-r from-orange-500 to-orange-700 border-orange-500 transition-all duration-150"
          : "bg-transparent text-black  border-black h-fit w-fit"
      } ${props.style}`}
    >
      {props.title}
    </button>
  );
};
export const FormButton = (props) => {
  return (
    <button
      className={`h-10 rounded-lg px-5 text-sm outline-none flex justify-center items-center hover:bg-gradient-to-r from-orange-500 to-orange-700 bg-orange-500 transition-all duration-150 cursor-pointer ${props.styles}`}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};
