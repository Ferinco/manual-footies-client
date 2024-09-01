import axios from "axios";
const token = localStorage.getItem("token")
const mainApi = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API,

});

export const cloudName = 'dyunxdvmy'
export const uploadPreset = 'manual_footies'
const testApi = axios.create({baseURL: `https://api.escuelajs.co/api/v1`})
export const fetchAllProducts = () => {
  return testApi.get(`/products`);
};
export const fetchAllCategories = () => {
  return testApi.get(`/categories/4`);
};

export { mainApi };
