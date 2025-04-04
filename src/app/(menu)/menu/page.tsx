"use client";
import { useMealsByCategory, useFindByArea, useFindByCategories } from "../../../../hooks/useMeals";
import { FilterDropdown } from "../../components/common/FilterDropdown";
import MenuCard from "../../components/ui/MenuCard";
import { Area, Category, Meal } from "../../../../types/meal"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton"
import Loading from "@/app/components/ui/Loading";
import ErrorMessage from "@/app/components/ui/ErrorMessage";
import EmptyState from "@/app/components/ui/EmptyState";
import { useState } from "react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const { data: meals = [],isLoading: isMealsLoading,isError: isMealsError,} = useMealsByCategory(selectedCategory?.strCategory || "Dessert");
  const { data: areas = [],isLoading: isAreasLoading } = useFindByArea();
  const { data: categories = [],isLoading: isCategoriesLoading } = useFindByCategories();

  return (
    <>
      <NavigationMenu className="my-4 mx-6">
        <NavigationMenuList>
          {isAreasLoading ? (
             <Skeleton className="h-8 w-[75px] rounded-sm bg-white" />
              ) : (
                <FilterDropdown<Area>
                  label="Area"
                  items={areas}
                  getTitle={(a) => a.strArea}
                  selected={selectedArea}
                  onSelect={(a) => setSelectedArea(a)} 
                />
              )}
          {isCategoriesLoading ? (
            <Skeleton className="h-8 w-[100px] rounded-sm bg-white" />
              ) : (
                <FilterDropdown<Category>
                  label="Category"
                  items={categories}
                  getTitle={(c) => c.strCategory}
                  selected={selectedCategory}
                  onSelect={(c) => setSelectedCategory(c)} // ✅ set full object
                />
              )}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mx-6 my-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {isMealsLoading &&
          Array.from({ length: 10 }).map((_, idx) => (
            <Loading key={idx} />
        ))}
        {isMealsError && <ErrorMessage />}
        {!isMealsLoading && (!meals || meals.length === 0) && (
          <EmptyState />
        )}
        {!isMealsLoading && meals?.length > 0 &&
          meals.slice(0, 10).map((meal: Meal) => (
            <MenuCard
              key={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
            />
          ))}
      </div>
    </>
  );
}
