export const FormInput=(props) =>{
    return(
<input className={`w-full placeholder:text-black ${props.styles}`} placeholder={props.holder} />
    )
}