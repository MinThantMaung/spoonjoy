"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useGetMealById } from "../../../../hooks/useMeals";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowLeft} from "lucide-react";
import DetailLoading from "@/app/components/ui/DetailLoading";
import ErrorMessage from "@/app/components/ui/ErrorMessage";
import MealImage from "@/app/components/mealDetail/MealImage";
import MealHeader from "@/app/components/mealDetail/MealHeader";
import MealIngredients from "@/app/components/mealDetail/MealIngredients";
import Instructions from "@/app/components/mealDetail/Instructions";

const Page = () => {
  const parems = useParams();
  const id = typeof parems.id === "string" ? parems.id : "";
  const router = useRouter();

  const { data: mealData, isLoading, isError, isSuccess } = useGetMealById(id);
  const meal = mealData?.[0];

  const ingredients = useMemo(() => {
    const list: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal?.[`strIngredient${i}` as keyof typeof meal];
      const measure = meal?.[`strMeasure${i}` as keyof typeof meal];
      if (ingredient && ingredient.trim()) {
        list.push(`${measure || ""} ${ingredient}`.trim());
      }
    }
    return list;
  }, [meal]);

  const handleBackToMenu = () =>{
    router.push("/menu")
  }

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && (
        <div className="min-h-screen flex justify-center items-center">
          <DetailLoading />
        </div>
      )}
      {isSuccess && (
        <div className="flex flex-col w-full">
          <div className="flex justify-start items-center mt-6 ml-6" onClick={handleBackToMenu}>
            <Button variant="link" className="hover:cursor-pointer"><ArrowLeft /> Back to menu</Button>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-20 mr-20">
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="w-full lg:w-1/2 flex flex-col space-y-4 sm:ml-6">
              <MealHeader title={meal.strMeal} category={meal.strCategory} area={meal.strArea} tags={meal.strTags} />

              {/* Ingredients */}
              <MealIngredients ingredients={ingredients} />

              {/* Video Button */}
              {meal.strYoutube && (
                <Button
                  onClick={() => window.open(meal.strYoutube, "_blank")}
                  className="mt-4 w-fit hover:cursor-pointer bg-green-500 hover:text-white"
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch Video Tutorial
                </Button>
              )}
            </div>
          </div>
          {/* Instructions */}
          <Instructions text={meal.strInstructions} />
        </div>
      )}
    </>
  );
};

export default Page;
