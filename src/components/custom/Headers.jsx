export const SubHeader =(props)=>{
    return(

            <h2 className={`text-5xl lg:text-6xl w-full md:w-5/6 lg:w-1/2 uppercase font-bold ${props.style}`}>{props.title}</h2>
    )
}