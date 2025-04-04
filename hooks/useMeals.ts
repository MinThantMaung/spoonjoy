import { useQuery } from "@tanstack/react-query"
import { fetchAllArea, fetchAllCategories, fetchMealsByCategory } from "../services/mealServices"

export const useMealsByCategory = (category: string) => {
    return useQuery({
      queryKey: ["meals", category],
      queryFn: () => fetchMealsByCategory(category).then(res => res.data.meals),
    });
};

export const useFindByArea = () => {
    return useQuery({
      queryKey: ["areas"],
      queryFn: () => fetchAllArea().then(res => res.data.meals),
    });
};

export const useFindByCategories = () => {
    return useQuery({
      queryKey: ["categories"],
      queryFn: () => fetchAllCategories().then(res => res.data.meals),
    });
};