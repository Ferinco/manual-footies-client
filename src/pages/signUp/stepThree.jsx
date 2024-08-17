import { useState } from "react";
import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/users";
import { UseAppContext } from "../../contexts/context";
import { mainApi } from "../../utils/api/axios";

export default function StepThree({ setStep }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { chosenName, userEmail } = UseAppContext();
  const [validation, setValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });

  //password validationh
  const validatePassword = (password) => {
    return {
      length: /.{6,}/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
    };
  };

  // Function to check if all validation conditions are true
  const allConditionsMet = (validation) => {
    return Object.values(validation).every((value) => value === true);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    const checked = validatePassword(password);
    setValidation(checked);
  };
  console.log(password);

  const RegisterUser = async (e) => {
    e.preventDefault();
  
    if (confirmPassword === password) {
      try {
     const response =  await dispatch(
          registerUser({
            email: userEmail,
            username: chosenName,
            password: password,
          })
        );
       

        response.status === 201 ? setStep(4) : setStep(3)
    setStep(4)
      } catch (error) {
        setError("Registration failed. Please try again.");
      }
    } else {
      setError("*Passwords do not match.");
    }
  };
  

  return (
    <form onSubmit={RegisterUser}>
      <div className="flex flex-col gap-3">
        <div>
          <FormInput
            holder="password"
            styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
            onChange={handleChange}
            type="password"
            required={true}
          />
        </div>
        <div>
          <FormInput
            holder="confirm password"
            styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
            type="password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      {allConditionsMet(validation) ? (
        ""
      ) : (
        <div className="flex flex-col text-[12px] mt-3">
          {/* <p className="text-[13px]">Password must:</p> */}
          <p style={{ color: validation.uppercase ? "green" : "red" }}>
            Contains at least one uppercase letter
          </p>
          <p style={{ color: validation.lowercase ? "green" : "red" }}>
            Contains at least one lowercase letter
          </p>
          <p style={{ color: validation.number ? "green" : "red" }}>
            Contains at least one number
          </p>
          <p style={{ color: validation.length ? "green" : "red" }}>
            At least 6 characters long
          </p>
        </div>
      )}
      <p className="text-red-500 mt-3 text-sm font-medium pl-1">{error}</p>

      <div className="flex justify-end">
        <FormButton
          title="Next"
          styles="bg-black text-white mt-5 max-w-[100px] py-3"
        />
      </div>
    </form>
  );
}
