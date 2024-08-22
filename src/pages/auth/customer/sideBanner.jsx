export default function AuthBanner() {
  return (
    <div className="md:w-1/2 hidden md:flex h-screen justify-center items-center">
      <div className="h-[97%] w-[97%] rounded-3xl overflow-hidden relative flex flex-col">
        <img
          src="/images/authbanner.jpg"
          className="w-full h-full object-cover rounded-3xl object-right"
        />
        <div className="absolute h-full w-full rounded-3xl bg-gradient-to-t via-slate-900 from-orange-500 to-slate-900 opacity-70 text-white p-5 flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-center">
            let's make you the best footwears!
          </h2>
          
        </div>
      </div>
    </div>
  );
}
