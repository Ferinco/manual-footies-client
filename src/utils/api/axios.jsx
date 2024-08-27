import axios from "axios";
const token = localStorage.getItem("token")
const mainApi = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API,

});
// mainApi.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );




const testApi = axios.create({baseURL: `https://api.escuelajs.co/api/v1`})
export const fetchAllProducts = () => {
  return testApi.get(`/products`);
};
export const fetchAllCategories = () => {
  return testApi.get(`/categories/4`);
};

export { mainApi };
