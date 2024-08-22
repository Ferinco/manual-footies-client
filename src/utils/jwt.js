import { jwtDecode } from "jwt-decode";
import { mainApi } from "./api/axios";

const isValidToken = (token) => {
    if (!token) {
      return false;
    }
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;   
    return decoded.exp > currentTime;
  };

  
const handleTokenExpired = (exp) => {
    let expiredTimer;
    window.clearTimeout(expiredTimer);
    const currentTime = Date.now();
    const timeLeft = exp * 1000 - currentTime;
    console.log(timeLeft);
    expiredTimer = window.setTimeout(() => {
      console.log("expired");
      toast.error(
        "session expired, log in to gain access to your dashboard."
      );
    }, timeLeft);
  };

  const setSession = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      mainApi.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    } else {
      localStorage.removeItem("token");
      delete mainApi.defaults.headers.common.Authorization;
    }
  };

export { isValidToken, setSession, handleTokenExpired };