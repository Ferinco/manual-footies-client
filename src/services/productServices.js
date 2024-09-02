import { mainApi } from "../utils/api/axios";

export const ProductServices = {
  postProduct: async (payload) => {
    const { data } = await mainApi.post(
      `/api/v1/products`,
      {
        payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  },
};
