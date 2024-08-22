import axios from "axios";
const testApi = axios.create({baseURL: `https://api.escuelajs.co/api/v1`})
const mainApi = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API,
});
export const fetchAllProducts = () => {
  return testApi.get(`/products`);
};
export const fetchAllCategories = () => {
  return testApi.get(`/categories/4`);
};

export { mainApi };
