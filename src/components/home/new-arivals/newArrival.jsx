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
    <div className="mt-20 flex flex-col gap-10">
      <div className="flex justify-between">
        <h4>NEW ARRIVALS</h4>
        <SubHeader style="text-start" title="Be the first to take the #news" />
        <p className="flex items-end">jgfyur jur hiue ihieyug uygeu</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {arrivals.map((arrival, index) => (
          <div
            key={index}
            className={`border-red-500 border h-[300px] ${
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
