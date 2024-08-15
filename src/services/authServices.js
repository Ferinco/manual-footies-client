
import { mainApi } from "../utils/api/axios";
export const registerAuth = async ({ email, username, password }) => {
  const { data } = await mainApi.post("/register", {
    email,
    username,
    password,
  });
  return data;
};
