import { Button } from "../button";

export const BannerSlide = ()=>{
    return(
        <form className="flex flex-col sm:flex-row gap-5 mt-8 h-fit">
        <input placeholder="Billboard image" className="h-[200px] sm:h-full w-full sm:w-[250px] p-2 flex justify-between items-center border border-dashed bg-transparent placeholder:text-center placeholder:text-black/75 border-black/85 rounded-xl"/>
        <div className="flex flex-col gap-3">
            <input className="bg-transparent border border-black/85 rounded-xl h-10 w-full sm:w-80 px-2 placeholder:text-sm placeholder:text-black/75" placeholder="Name"/>
            <textarea className="bg-transparent border border-black/85 rounded-xl h-10 w-full sm:w-80 px-2 placeholder:text-sm placeholder:text-black/75" placeholder="Description"></textarea>
            <Button type="colored" title="Update" style="rounded-xl"/>
        </div>
        </form>
    )
}

export const EditSlide = ()=>{
    return(
        <>
        edit
        </>
    )
}

export const PostSlide = ()=>{
    return(
        <>
        post
        </>
    )
}