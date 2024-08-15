import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import AuthBanner from "./sideBanner";

export default function RegisterPage() {
  return (
    <div className="flex justify-between">
      <div className="md:w-1/2 w-screen h-screen">
        <div className="max-w-[320px] m-auto flex flex-col justify-center h-full gap-16">
          <h2 className="text-3xl text-center font-semibold">
            Lorem Ipsum Kinikan
          </h2>
          <div className="flex flex-col gap-3">
            <div>
              <FormInput
                holder="email"
                styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
              />
            </div>
            <div>
              <FormInput
                holder="username"
                styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
              />
            </div>
            <div>
              <FormInput
                holder="password"
                styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
              />
            </div>
            <FormButton title="Sign up" styles="bg-black text-white mt-5" />
            <p className="text-sm font-medium text-center">
              Already have an account?{" "}
              <a className=" text-blue-600" href="/login">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
      <AuthBanner />
    </div>
  );
}
