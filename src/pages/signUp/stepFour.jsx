import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";

export default function StepFour({ setStep }) {
  return (
    <div>
      <div>
        <FormInput
          holder="Enter OTP"
          styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
        />
      </div>
      <div className="flex justify-center">
        <FormButton
          title="Next"
          styles="bg-black text-white mt-5 max-w-[100px] py-3"
        />
      </div>
    </div>
  );
}
