import { axiosInstance } from "../utils/axiosInstance";

export const getAllFood = async () => {
    try {
        const res = await axiosInstance.get(`filter.php?c=Dessert`)
        return res.data.meals;
    } catch (e) {
        throw e;
    }
}
