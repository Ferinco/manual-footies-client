import { mainApi } from "../utils/api/axios";

export const loginAuth = async (email, password) => {
  const { data } = await mainApi.post("/api/v1/auth/login", { email, password });
  const token = data.token;
  if (token) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};
