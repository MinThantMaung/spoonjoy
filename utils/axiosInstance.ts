import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "www.themealdb.com/api/json/v1/1/",
})