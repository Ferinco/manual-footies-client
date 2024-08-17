import { useState } from "react";
import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/users";
import { UseAppContext } from "../../contexts/context";
import { mainApi } from "../../utils/api/axios";

export default function StepThree({ setStep }) {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { chosenName, userEmail } = UseAppContext();
  console.log(chosenName, userEmail, password);
  const RegisterUser = (e) => {
    e.preventDefault()
    // dispatch(registerUser({
    //     userEmail,
    //     chosenName,
    //     password
    // }))
setStep(4)
  };
  return (
    <form onSubmit={RegisterUser}>
      <div className="flex flex-col gap-3">
        <div>
          <FormInput
            holder="password"
            styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            holder="confirm password"
            styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
          />
        </div>
      </div>
      <div className="flex flex-col text-[12px] mt-3">
        {/* <p className="text-[13px]">Password must:</p> */}
        <p>- be at least 6 charcaters long</p>
        <p>- contain at least 1 uppercase letter</p>
        <p>- contain at least 1 uppercase letter</p>
        <p>- contain at least 1 number</p>
      </div>
      <div className="flex justify-end">
        <FormButton
          title="Next"
          styles="bg-black text-white mt-5 max-w-[100px] py-3"
        />
      </div>
    </form>
  );
}
