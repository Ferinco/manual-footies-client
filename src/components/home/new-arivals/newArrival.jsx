import { SubHeader } from "../../custom/Headers";

export default function NewArrival() {
  const arrivals = [
    {
      title: "",
    },
    { title: "" },
    { title: "" },
  ];
  return (
    <div className="mt-40 flex flex-col gap-10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between">
        <h4>NEW ARRIVALS</h4>
        <SubHeader style="text-start" title="Be the first to take the #news" />
        <p className="hidden lg:flex items-end">
          jgfyur jur hiue ihieyug uygeu
        </p>
      </div>
      <div className="flex lg:grid grid-cols-3 gap-4 overflow-x-auto">
        {arrivals.map((arrival, index) => (
          <div
            key={index}
            className={`border-black border h-[300px] min-w-[300px] ${
              index === 1 ? "mt-14" : "mt-0"
            }`}
          >
            {arrival.title}
          </div>
        ))}
      </div>
    </div>
  );
}
