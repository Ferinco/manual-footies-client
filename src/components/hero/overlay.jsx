export default function HeroOverlay (){
    return(
        <div className="absolute flex justify-center items-end w-full -mt-12">
            <img src="/images/hero-main2.png" className="max-w-3xl -rotate-[25deg] -ml-20 mt-40"/>
            <div className="text-end">
                <div className="flex flex-col">
            <h1 className="text-5xl font-bold mb-16 -ml-48 text-black/75">Wear <span className="text-black">bato</span> with <br/> 100% <span className="text-black">elegance!</span></h1>
                </div>

            </div>
        </div>
    )
}