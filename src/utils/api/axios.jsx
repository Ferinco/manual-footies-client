import axios from "axios";

const mainApi = axios.create({
    baseURL: `https://api.escuelajs.co/api/v1`
})
export const fetchAllProducts = () =>{
   return mainApi.get(`/products`)
}