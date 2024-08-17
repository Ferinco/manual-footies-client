export const FormInput=(props) =>{
    return(
<input className={`w-full placeholder:text-black outline-none ${props.styles}`} placeholder={props.holder} onChange={props.onChange}/>
    )
}