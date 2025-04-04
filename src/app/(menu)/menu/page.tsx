"use client";
import { useMealsByCategory, useFindByArea, useFindByCategories } from "../../../../hooks/useMeals";
import { FilterDropdown } from "../../components/common/FilterDropdown";
import MenuCard from "../../components/ui/MenuCard";
import { Area, Category, Meal } from "../../../../types/meal"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function MenuPage() {
  const { data: meals = [] } = useMealsByCategory("Dessert");
  const { data: areas = [] } = useFindByArea();
  const { data: categories = [] } = useFindByCategories();

  return (
    <>
      <NavigationMenu className="my-4 mx-6">
        <NavigationMenuList>
          <FilterDropdown<Area>
            label="Area"
            items={areas}
            getTitle={(a) => a.strArea}
            getHref={(a) => `/area/${encodeURIComponent(a.strArea)}`}
          />
          <FilterDropdown<Category>
            label="Category"
            items={categories}
            getTitle={(c) => c.strCategory}
            getHref={(c) => `/category/${encodeURIComponent(c.strCategory)}`}
          />
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mx-6 my-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {meals.slice(0, 10).map((meal : Meal) => (
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
