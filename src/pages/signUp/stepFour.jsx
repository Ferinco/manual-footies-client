import { useState } from "react";
import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import { UseAppContext } from "../../contexts/context";
import { mainApi } from "../../utils/api/axios";

export default function StepFour({ setStep }) {
  const { chosenName, userEmail } = UseAppContext();
  const [otp, setOtp] = useState("");
  console.log(otp);

  //verify otp sent to email
  const CheckOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await mainApi.post(`/api/v1/auth/verify`, {
        email: userEmail,
        otp: "435873",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={CheckOTP}>
      <div>
        <FormInput
          holder="Enter OTP"
          styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
          required={true}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="flex justify-center">
          <FormButton
            title="Next"
            styles="bg-black text-white mt-5 max-w-[100px] py-3"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}
