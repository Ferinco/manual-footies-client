export const LongCard = () => {
    const services = [
        {
          icon: "",
          title: "custom shoe designs",
          info: "guygsd hsiudgsghdiusgdiushdiu iushuihssiuhius suhui ",
        },
        {
          icon: "",
          title: "exclusive collections",
          info: "guygsd hsiudgsghdiusgdiushdiu iushuihssiuhius suhui ",
        },
        // {
        //     icon: "",
        //     title: "maintainance advice",
        //     info: "guygsd hsiudgsghdiusgdiushdiu iushuihssiuhius suhui ",
        //   }
      ];
  return (
    <div className="flex justify-between h-full rounded-2xl border-2 border-red-500 w-3/4 p-9">
      <h1 className="w-1/2 text-6xl">Look good, feel great, perform better</h1>
      <div className="flex flex-col justify-between">
        {
            services.map((service, index)=>(
        <div className="flex" key={index}>
          <div className="icon-div"></div>
          <div className="text-div">
            <h2 className="text-xl uppercase font-semibold">{service.title}</h2>
            <p>{service.info}</p>
          </div>
        </div>
            ))
        }
      </div>
    </div>
  );
};
export const ShortCard = () => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-red-500 w-1/4 relative">
    <img src="/images/hero-main2.png"/>
    <div className="absolute bottom-0 flex justify-center text-center items-center w-full">
    <h2 className="text-2xl uppercase font-bold">#Item of the day</h2>
    </div>
    </div>
  );
};
