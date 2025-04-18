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
import PaginationComponent from "@/app/components/common/FilterPagination";
import { useRouter } from "next/navigation";

export default function MenuPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 10;

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

  //pagination page handle
  const totalPages = Math.ceil(mealsToShow.length / mealsPerPage);
  const startIndex = (currentPage - 1) * mealsPerPage;
  const endIndex = startIndex + mealsPerPage;
  const currentMeals = mealsToShow.slice(startIndex, endIndex);

  const handleCardClick = (id: string) => {
    router.push(`/menu/${id}`);
  };

  return (
    <>
      <div className="flex flex-col">
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
            currentMeals.map((meal: Meal) => (
              <MenuCard
                key={meal.idMeal}
                title={meal.strMeal}
                image={meal.strMealThumb}
                id= {meal.idMeal}
                onClick={handleCardClick}
              />
            ))}
        </div>
        {mealsToShow.length > 0 && (
          <div className="mt-auto pt-4 pb-6">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </>
  );
}
