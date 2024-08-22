import { useState } from "react";
import StepOne from "./stepOne";
import StepThree from "./stepThree";
import StepTwo from "./stepTwo";
import StepFour from "./stepFour";

export default function SignUpSteps() {
  const [step, setStep] = useState(1);
  console.log(step);
  const renderForm = () => {
    switch (step) {
      case 1:
        return <StepOne setStep={setStep} />;
      case 2:
        return <StepTwo setStep={setStep} />;
      case 3:
        return <StepThree setStep={setStep} />;
      case 4:
        return <StepFour setStep={setStep} />;
      default:
        return <StepOne />;
    }
  };
  const renderTitle = () => {
    switch (step) {
      case 1:
        return "Create Your Account.";
      case 2:
        return "Oya, Username.";
      case 3:
        return "One More Step To Go!";
      case 4:
        return "We sent you an OTP";
      default:
        return "";
    }
  };
  const renderSubTitle = () => {
    switch (step) {
      case 1:
        return "Enter your email address";
      case 2:
        return "Choose a username";
      case 3:
        return "Choose a password of your choice";
      case 4:
        return "Check your email for OTP";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className={`text-5xl font-semibold ${step === 4 ? "text-center" :  "text-start"}`}>
          {renderTitle()}
        </h2>
        <p className={`${step === 4 ? "text-center" :  "text-start"}`}>{renderSubTitle()}</p>
      </div>

      <div className={step === 4 ? "mt-5": "mt-16"}>{renderForm()}</div>
    </div>
  );
}
