export const DeleteStoreModal=(props)=> {
    return(
        <div className={`h-[calc(100vh-64px)] mt-16 top-0 bg-white/50 backdrop-blur-3xl lg:w-[calc(100vw-250px)] z-50 border-red-500 transition-all duration-100 ${props.hide === false ? "hidden" : "absolute flex"}`}>
<div className="box">
Are you sure you want to delete this {props.type}
<div className="flex gap-5">
<button onClick={props.No}>No</button>
<button onClick={props.Yes}>Yes</button>
</div>
</div>
        </div>
    )
}