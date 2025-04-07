'use client'
import { useParams } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import { useMealsByArea } from '../../../../hooks/useMeals';
import Loading from "@/app/components/ui/Loading";
import ErrorMessage from "@/app/components/ui/ErrorMessage";
import EmptyState from "@/app/components/ui/EmptyState";
import { Meal } from '../../../../types/meal';
import MenuCard from '@/app/components/ui/MenuCard';
import PaginationComponent from '@/app/components/common/FilterPagination';

const Page = () => {
    const params = useParams();
    const area = useMemo(() => params.area?.toString() ?? "", [params]);
    const {
      data: mealsByArea = [],
      isLoading,
      isError,
    } = useMealsByArea(area);
    
    const [currentPage, setCurrentPage] = useState(1);
    const mealsPerPage = 10;
    const totalPages = Math.ceil((mealsByArea?.length || 0) / mealsPerPage);
    const startIndex = (currentPage - 1) * mealsPerPage;
    const endIndex = startIndex + mealsPerPage;
    const currentMeals = mealsByArea?.slice(startIndex, endIndex) || [];
  return (
    <>
      <h1 className='ml-6 my-6 text-xl font-bold'>
        {area}'s MealList
      </h1>
      {/* Meals Grid */}
      <div className="mx-6 my-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {isLoading &&
            Array.from({ length: 10 }).map((_, idx) => <Loading key={idx} />)}

          {!isLoading && isError && <ErrorMessage />}

          {!isLoading && currentMeals.length === 0 && <EmptyState />}

          {!isLoading &&
            currentMeals.map((meal: Meal) => (
              <MenuCard
                key={meal.idMeal}
                title={meal.strMeal}
                image={meal.strMealThumb}
              />
            ))}
        </div>
        {currentMeals.length > 0 && (
          <div className="mt-auto pt-4 pb-6">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
    </>
  )
}

export default Page