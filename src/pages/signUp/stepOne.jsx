import { FormInput } from "../../components/custom/inputs";
import { FormButton } from "../../components/custom/button";
import { useState } from "react";
import { UseAppContext } from "../../contexts/context";
import { mainApi } from "../../utils/api/axios";
import toast from "react-hot-toast";

export default function StepOne({ setStep }) {
  const { setUserEmail } = UseAppContext();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // check if email is vaild
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // save step one
  const onSave = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
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
    } else {
      setError("*Please enter a valid email address.");
    }
  };
  return (
    <form onSubmit={onSave}>
      <FormInput
        label="email"
        styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
        onChange={
          ((e) => {setEmail(e.target.value); setError("")})
        }
      />
      <p className="text-red-500 mt-1 text-sm font-medium pl-1">{error}</p>
      <div className="flex justify-end">
        <FormButton title="Next" styles="bg-black text-white mt-5" 
        disabled={error ?true : false}
        />
      </div>
    </form>
  );
}
