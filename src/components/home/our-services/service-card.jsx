import { Icon } from "@iconify/react/dist/iconify.js";

export const LongCard = () => {
  const services = [
    {
      icon: "mage:stars-b",
      title: "custom shoe designs",
      info: "guygsd hsiudgsghdiusgdiushdiu iushuihssiuhius suhui ",
    },
    {
      icon: "fluent:collections-20-regular",
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
    <div className="flex flex-col sm:flex-row justify-center h-auto rounded-2xl border-2 w-full lg:w-2/3 sm:px-9 sm:py-9 px-7 py-9 bg-[#bbc19f] gap-7 sm:gap-0">
      <h1 className="w-full sm:w-1/2 text-6xl text-black">
        Look good, feel great, perform better
      </h1>
      <div className="w-full sm:w-1/2 flex flex-col justify-between gap-5 sm:gap-0">
        {services.map((service, index) => (
          <div className="flex gap-2" key={index}>
            <div className="icon-div">
              <Icon icon={service.icon} width="1.2em" height="1.2em" />
            </div>
            <div className="text-div flex flex-col gap-2">
              <h2 className="text-xl uppercase font-semibold">
                {service.title}
              </h2>
              <p className="text-black/75 uppercase">{service.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const ShortCard = () => {
  return (
    <div className="flex flex-col justify-between rounded-2xl w-full lg:w-1/3 relative overflow-hidden h-64 lg:h-auto border bg-orange-100">
      <div className="absolute bottom-0 flex justify-center text-center items-end bg-opacity-20 w-full h-full= p-5">
        <h2 className="text-3xl uppercase font-bold text-white ">
          #Item of the day
        </h2>
      </div>
    </div>
  );
};
