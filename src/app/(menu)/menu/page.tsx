"use client";

import { useState } from "react";
import {
  useMealsByCategory,
  useMealsByArea,
  useFindByArea,
  useFindByCategories,
} from "../../../../hooks/useMeals";
import { FilterDropdown } from "../../components/common/FilterDropdown";
import MenuCard from "../../components/ui/MenuCard";
import { Area, Category, Meal } from "../../../../types/meal";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import Loading from "@/app/components/ui/Loading";
import ErrorMessage from "@/app/components/ui/ErrorMessage";
import EmptyState from "@/app/components/ui/EmptyState";
import PaginationComponent from "@/app/components/common/pagination";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  // Get filter options
  const { data: areas = [], isLoading: isAreasLoading } = useFindByArea();
  const { data: categories = [], isLoading: isCategoriesLoading } = useFindByCategories();

  // Meals by category and area
  const {
    data: mealsByCategory = [],
    isLoading: isMealsCategoryLoading,
    isError: isMealsCategoryError,
  } = useMealsByCategory(selectedCategory?.strCategory || "Dessert");

  const {
    data: mealsByArea = [],
    isLoading: isMealsAreaLoading,
  } = useMealsByArea(selectedArea?.strArea || "");
  let mealsToShow: Meal[] = [];
  let isLoading = false;

  if (selectedCategory && selectedArea) {
    mealsToShow = mealsByCategory.filter((categoryMeal: Meal) =>
      mealsByArea.some((areaMeal: Meal) => areaMeal.idMeal === categoryMeal.idMeal)
    );
    isLoading = isMealsCategoryLoading || isMealsAreaLoading;
  } else if (selectedCategory) {
    mealsToShow = mealsByCategory;
    isLoading = isMealsCategoryLoading;
  } else if (selectedArea) {
    mealsToShow = mealsByArea;
    isLoading = isMealsAreaLoading;
  } else {
    mealsToShow = mealsByCategory;
    isLoading = isMealsCategoryLoading;
  }

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
              onSelect={(c) => setSelectedCategory(c)}
            />
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Meals Grid */}
      <div className="mx-6 my-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {isLoading &&
          Array.from({ length: 10 }).map((_, idx) => <Loading key={idx} />)}

        {!isLoading && isMealsCategoryError && <ErrorMessage />}

        {!isLoading && mealsToShow.length === 0 && <EmptyState />}

        {!isLoading &&
          mealsToShow.slice(0, 10).map((meal: Meal) => (
            <MenuCard
              key={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
            />
          ))}
      </div>
      <div className="py-6">
        <PaginationComponent />
      </div>
    </>
  );
}
