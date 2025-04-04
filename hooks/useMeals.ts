import { useQuery } from "@tanstack/react-query"
import { getAllFood } from "../api/meal"

const useGetAllFoods = () =>{
    return useQuery({
        queryKey:['get','food_list'],
        queryFn: () => getAllFood(),
    })
}

export const useMeals = () =>{
    return {
        useGetAllFoods,
    }
}