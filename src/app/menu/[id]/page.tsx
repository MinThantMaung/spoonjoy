"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useGetMealById } from "../../../../hooks/useMeals";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, Globe } from "lucide-react";

const Page = () => {
  const parems = useParams();
  const id = typeof parems.id === "string" ? parems.id : "";

  const { data: mealData, isLoading, isError, isSuccess } = useGetMealById(id);
  const meal = mealData?.[0];

  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal?.[`strIngredient${i}` as keyof typeof meal];
    const measure = meal?.[`strMeasure${i}` as keyof typeof meal];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure || ""} ${ingredient}`.trim());
    }
  }

  return (
    <>
      {isSuccess && (
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-8 mt-10 ml-20 mr-20">
            <div className="relative w-full lg:w-1/2 aspect-video rounded-xl shadow-lg overflow-hidden">
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col space-y-4 ml-6">
              <h1 className="text-3xl font-bold">{meal.strMeal}</h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <UtensilsCrossed className="h-4 w-4" />
                  {meal.strCategory}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {meal.strArea} Cuisine
                </Badge>
                {meal.strTags && (
                  <Badge variant="secondary">{meal.strTags}</Badge>
                )}
              </div>

              {/* Ingredients */}
              <div>
                <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients</h2>
                <div className="flex gap-10">
                  <ul className="list-disc space-y-1">
                    {ingredients.slice(0, 10).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <ul className="list-disc space-y-1">
                    {ingredients.slice(10, 20).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Button */}
              {meal.strYoutube && (
                <Button
                  onClick={() => window.open(meal.strYoutube, "_blank")}
                  className="mt-4 w-fit hover:cursor-pointer bg-green-500 hover:text-white"
                >
                  Watch Video Tutorial
                </Button>
              )}
            </div>
          </div>
          {/* Instructions */}
          <div className="flex flex-col justify-center items-center my-8">
            <div className="max-w-5xl">
              <h2 className="text-xl font-semibold mt-6 mb-3">Instructions</h2>
              <div className="bg-white text-black p-6 rounded-xl shadow border border-zinc-200 leading-relaxed whitespace-pre-line">
                {meal.strInstructions}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
