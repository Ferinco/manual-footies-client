import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../components/custom/button";
import { NavLinks } from "../../resusables/links";
import CartIcon from "../../components/custom/cartIcon";
import { PATH_AUTH } from "../../routes/path";

export default function Navbar() {
  return (
    <div className="h-20 flex justify-between container m-auto py-4 items-center">
      <div className="logo-div">
        <h1 className="text-3xl">bato</h1>
      </div>
      <div className="md:flex gap-4 ml-16 hidden">
        {NavLinks.map((link, index) => (
          <a key={index} className="text-xs font-semibold">
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <a href={PATH_AUTH.client} className="outline-none">
          <Button title="Log in" type="colored"></Button>
        </a>
        <CartIcon />
      </div>
    </div>
  );
}
