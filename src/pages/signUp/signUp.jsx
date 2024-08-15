import { useState } from "react";
import { useDispatch } from "react-redux";
// import { register } from "../../redux/slices/users";
import {registerUser } from "../../redux/slices/users";
export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  
  //function for sign up
  const handleRegister = (event) => {
    event.preventDefault();
dispatch(registerUser({
  email, username, pwd
}))
  };
  return (
    <form onSubmit={handleRegister}>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <button className="bg-green-300" type="submit">
        submit
      </button>
    </form>
  );
};
