import { axiosInstance } from "../utils/axiosInstance";

export const fetchMealsByCategory = (category: string) => {
    return axiosInstance.get(`filter.php?c=${category}`);
};

export const fetchAllArea = () => {
    return axiosInstance.get(`list.php?a=list`);
};

export const fetchAllCategories = () => {
    return axiosInstance.get(`list.php?c=list`);
};