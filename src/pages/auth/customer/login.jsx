import { useDispatch, useSelector } from "react-redux";
import { FormButton } from "../../../components/custom/button";
import { FormInput } from "../../../components/custom/inputs";
import AuthBanner from "./sideBanner";
import { loginUser } from "../../../redux/slices/users";
import { UseAppContext } from "../../../contexts/context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { userEmail, setUserEmail, pass, setPass } = UseAppContext();
  const state = useSelector((state) => state.user);
  const status = state.status;
  console.log(status);
  const navigate = useNavigate();
  console.log(userEmail, pass);
  const dispatch = useDispatch();
  const TryLogin = async (e) => {
    e.preventDefault();
    try {
      const reponse = await dispatch(
        loginUser({
          email: userEmail,
          password: pass,
        })
      );

      if (status === "succeeded") {
        toast.success("logged in successfully");
        navigate("/customer");
      } else {
        toast.error("could not log you in, please try again");
      }
      console.log(reponse);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="md:w-1/2 w-screen h-screen">
        <div className="max-w-[320px] m-auto flex flex-col justify-center h-full gap-16">
          <h2 className="text-3xl text-center font-semibold">
            Lorem Ipsum Kinikan
          </h2>
          <form className="flex flex-col gap-3" onSubmit={TryLogin}>
            <div>
              <FormInput
                holder="email"
                styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div>
              <FormInput
                holder="password"
                styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="flex justify-end items-end">
              <p className="text-sm text-blue-600 font-medium">
                forgot password?
              </p>
            </div>
            <FormButton title="Log in" styles="bg-black text-white mt-5" />
            <p className="text-sm font-medium text-center">
              Dont't have an account?{" "}
              <a className=" text-blue-600" href="/sign-up">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
      <AuthBanner />
    </div>
  );
}
