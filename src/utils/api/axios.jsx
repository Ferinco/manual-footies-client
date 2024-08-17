import axios from "axios";

const mainApi = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API,
});
export const fetchAllProducts = () => {
  return mainApi.get(`/products`);
};
export const fetchAllCategories = () => {
  return mainApi.get(`/categories/4`);
};

export { mainApi };
