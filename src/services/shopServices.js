import { useSelector } from "react-redux";
import { mainApi } from "../utils/api/axios";
export const ShopServices = {
  getShops: async () => {
    const { data } = await mainApi.get(`/api/v1/shops`);
    return data;
  },

  createShop: async ({ name, description, billboardImage }) => {
    const { data } = await mainApi.post(
      "/api/v1/shops",
      { name, description, billboardImage },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  },

  updateShop: async (values, id) => {
    const { data } = await mainApi.put(`/api/v1/shops/${id}`, values, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  },
  deleteShop: async (id) => {
    const { data } = await mainApi.delete(`/api/v1/shops/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  },
};
