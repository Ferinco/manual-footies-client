import { useDispatch, useSelector } from "react-redux";
import { FormButton } from "../../../components/custom/button";
import { FormInput } from "../../../components/custom/inputs";
import AuthBanner from "./sideBanner";
import { loginUser } from "../../../redux/slices/users";
import { UseAppContext } from "../../../contexts/context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonPreloader from "../../../components/custom/preloaders/buttonPreloader";

export default function LoginPage() {
  const { userEmail, setUserEmail, pass, setPass } = UseAppContext();
  const state = useSelector((state) => state.user);
  const status = state.status;
  const isAuthenticated = useSelector((state) => state.user);
  const user = state.users
  console.log(user);
  const navigate = useNavigate();
  console.log(userEmail, pass);
  const dispatch = useDispatch();

  //login the user
  const TryLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        loginUser({
          email: userEmail,
          password: pass,
        })
      );
      if (response.type === "auth/loginUser/fulfilled") {
        toast.success("logged in successfully");
        navigate(user.role === "admin" ? '/admin': '/customer');
      } else {
        // toast.error("could not log you in, please try again");
      }
      console.log(response.type);
    } catch (error) {
      // toast.error("could not log you in, please try again");
      console.log(error);
    }
  };
  return (
    <div className="flex  justify-between">
      <div className="md:w-1/2 w-screen h-screen">
        <div className="max-w-[320px] m-auto flex flex-col justify-center h-full gap-16">
          <div className="flex flex-col gap-2">
          <h2 className="text-5xl text-start font-semibold">
            Welcome Back!
          </h2>
          <p>Login to continue to your account</p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={TryLogin}>
            <div className="flex flex-col gap-5">

            <div>
              <FormInput
                // styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
                onChange={(e) => setUserEmail(e.target.value)}
                label="Email"
              />
            </div>
            <div>
              <FormInput
                // styles="h-[50px] p-3 bg-[#d1d1d1] text-black"
                onChange={(e) => setPass(e.target.value)}
                type="password"
                label="Password"
              />
            </div>
            </div>
            <div className="flex justify-end items-end -mt-2">
              <p className="text-sm text-blue-600 font-medium">
                forgot password?
              </p>
            </div>
            <FormButton
              title={status === "loading" ? <ButtonPreloader /> : "Sign in"}
              styles="bg-black text-white mt-2"
            />
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
