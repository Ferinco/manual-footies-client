import { mainApi } from "../utils/api/axios";
import { setSession } from "../utils/api/utils";

export const loginAuth = async (email, password) => {
  const { data } = await mainApi.post("/api/v1/auth/login", { email, password });
  const token = data.token;
  if (token) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  setSession(token)
  return data;
};
