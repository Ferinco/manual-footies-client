import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import { UseAppContext } from "../../contexts/context";
import { useState } from "react";


export default function StepTwo({ setStep }) {
  const [username, setUsername] = useState("");
  const {chosenName, setChosenName } = UseAppContext();

  const onSave = (e) => {
    e.preventDefault();
    setChosenName(username)
    setStep(3);
  };

  return (
    <form onSubmit={onSave}>
      <FormInput
        label="username"
        styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
        onChange={(e) => setUsername(e.target.value)}
        required={true}
      />
      <div className="flex justify-end">
        <FormButton
          title="Next"
          styles=" text-white mt-5"
        />
      </div>
    </form>
  );
}
