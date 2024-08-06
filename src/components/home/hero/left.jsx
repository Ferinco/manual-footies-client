import { Button } from "../../custom/button";

export default function LeftSide() {
  return (
    <div className="md:w-2/4 lg:w-1/4 justify-center md:justify-start md:items-start items-center text-center md:text-start flex flex-col gap-3 md:gap-7">
      <p className="text-lg font-medium text-black/75">
      Bato's place is the home for the best footwear and quality leather goods, offering exceptional craftsmanship and style.
      </p>
      <div>
        <Button title="shop now" type="colored"></Button>
      </div>
    </div>
  );
}
