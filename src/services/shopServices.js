import { useSelector } from "react-redux";
import { mainApi } from "../utils/api/axios";
export const ShopServices = {
  getShops: async () => {
    const { data } = await mainApi.get(`/api/v1/shops`);
    return data;
  },
  createShop: async ({ name, description, billboardImage }) => {
  const token = localStorage.getItem("token");
    const { data } = await mainApi.post(
      "/api/v1/shops",
      {
        name,
        description,
        billboardImage,
        
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },
};
