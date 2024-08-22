import { useDispatch, useSelector } from "react-redux";
import { FormButton } from "../../../components/custom/button";
import { FormInput } from "../../../components/custom/inputs";
import ButtonPreloader from "../../../components/custom/preloaders/buttonPreloader";
import { UseAppContext } from "../../../contexts/context";
import { loginUser } from "../../../redux/slices/users";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { userEmail, setUserEmail, pass, setPass } = UseAppContext();
  const state = useSelector((state) => state.user);
  const status = state.status;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //login the admin
  const TryLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        loginUser({
          email: userEmail,
          password: pass,
        })
      );
      console.log(response)
      if (response.type === "auth/loginUser/fulfilled") {
        toast.success("logged in successfully");
        navigate("/admin");
      } else {
        toast.error("could not log you in, please try again");
      }
      console.log(response.type);
    } catch (error) {
      toast.error("could not log you in, please try again");
      console.log(error);
    }
  };
  return (
    <div className="bg-[#f1f1f1] h-screen flex justify-center items-center">
      <div className="h-96 w-[800px] m-auto rounded-2xl flex flex-col p-5 gap-5 bg-white">
        <div className="logo flex justify-self-center self-center md:justify-start md:self-start w-fit border-red-500 border h-[120px]">
          <h1>manual footies logo</h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col md:text-start text-center">
            <h2 className="text-2xl font-medium">Welcome back, Admin.</h2>
            <p>Enter your email and password to login</p>
          </div>
          <form className="flex flex-col gap-3 md:w-1/2" onSubmit={TryLogin}>
            <div>
              <FormInput
                holder="email"
                styles="h-[50px] p-3 bg-transparent text-black border border-[gray]"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div>
              <FormInput
                holder="password"
                styles="h-[50px] p-3 bg-transparent text-black border border-[gray]"
                onChange={(e) => setPass(e.target.value)}
                type="password"
              />
            </div>
            <FormButton
              title={status === "loading" ? <ButtonPreloader /> : "Sign in"}
              styles="bg-black text-white w-fit justify-self-end md:self-end self-center mt-3 md:mt-0 w-[88.33px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
