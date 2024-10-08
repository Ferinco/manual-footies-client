import { useState } from "react";
import { FormButton } from "../../components/custom/button";
import { FormInput } from "../../components/custom/inputs";
import { UseAppContext } from "../../contexts/context";
import { mainApi } from "../../utils/api/axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/users";
import { useNavigate } from "react-router-dom";

export default function StepFour({ setStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);
  const status = state.status;
  const { userEmail, pass } = UseAppContext();
  const [otp, setOtp] = useState("");
  console.log(otp);

  //login once sign up is successful
  const SignIn = async () => {
    try {
      const reponse = await dispatch(
        loginUser({
          email: userEmail,
          password: pass,
        })
      );
      if (status === "succeeded") {
        toast.success("Account created successfully");
        navigate("/customer");
      } else {
        toast.error("could not log you in, please try again");
      }
      console.log(reponse);
    } catch (error) {
      console.log(error);
    }
  };




    
    const handleChange = (e, index) => {
      const value = e.target.value;
      if (/^\d$/.test(value)) {
        const newOtp = otp.split('');
        newOtp[index] = value;
        setOtp(newOtp.join(''));
        if (index < 5 && value) {
          document.getElementById(`otp-${index + 1}`).focus();
        }
      }
    }
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      const newOtp = otp.split('');
      newOtp[index] = '';
      setOtp(newOtp.join(''));
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  //verify otp sent to email
  const CheckOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await mainApi.post(`/api/v1/auth/verify`, {
        email: userEmail,
        otp: Number(otp),
      });
      console.log(response);
      response.status === 200 ? SignIn() : toast.error("OTP is incorrect");
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("OTP is incorrect");
    }
  };
  return (
    <form onSubmit={CheckOTP}>
      <div>
      <div className="flex space-x-2">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          type="text"
          id={`otp-${index}`}
          maxLength="1"
          className="w-12 h-12 text-center border border-gray-300 rounded bg-transparent"
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
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
