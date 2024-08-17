import { FormInput } from "../../components/custom/inputs";
import { FormButton } from "../../components/custom/button";
import { useState } from "react";
import { UseAppContext } from "../../contexts/context";
import { mainApi } from "../../utils/api/axios";
import toast from "react-hot-toast";

export default function StepOne({ setStep }) {
  const { setUserEmail } = UseAppContext();
  const [email, setEmail] = useState("");
  console.log(email);
  const onSave = async (e) => {
    e.preventDefault();

    try {
      const response = await mainApi.post(`/api/v1/auth/check-email`, email);
      console.log(response);
      response.data.exists === false
        ? (setUserEmail(email), setStep(2))
        : toast.error("sorry, email is taken");
    } catch (error) {
      console.log(error);
      toast.success("error, 123");
    }
  };
  return (
    <form onSubmit={onSave}>
      <FormInput
        holder="you@example.com"
        styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex justify-end">
        <FormButton title="Next" styles="bg-black text-white mt-5" />
      </div>
    </form>
  );
}
