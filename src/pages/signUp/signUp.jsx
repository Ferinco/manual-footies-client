import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import AuthBanner from "../auth/customer/sideBanner";
import SignUpSteps from "./main";

export default function RegisterPage() {
  return (
    <div className="flex justify-between">
      <div className="md:w-1/2 w-screen h-screen">
        <div className="max-w-[320px] m-auto flex flex-col justify-center h-full gap-16">
        <SignUpSteps/>
        </div>
      </div>
      <AuthBanner />
    </div>
  );
}

