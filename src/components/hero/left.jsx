import { Button } from "../custom/button";

export default function LeftSide() {
  return (
    <div className="w-1/4 flex flex-col gap-7">
      <p className="text-lg font-medium text-black/75">
      Bato's place is the home for the best footwear and quality leather goods, offering exceptional craftsmanship and style.
      </p>
      <div>
        <Button title="shop now" type="colored"></Button>
        {/* <Button title="sign up" type=""></Button> */}
      </div>
    </div>
  );
}
