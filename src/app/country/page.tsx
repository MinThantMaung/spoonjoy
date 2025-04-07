'use client'
import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from '../components/ui/SearchBar';
import { Area } from '../../../types/meal';
import { useFindByArea } from '../../../hooks/useMeals';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from 'next/navigation';
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo } from 'react';
// @ts-ignore
import debounce from 'lodash/debounce';
import Image from 'next/image';
import notFound from '../../../public/Anxiety-pana.svg'

const DEBOUNCE_DELAY = 300;
const Country = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(""); // what user types
  const [search, setSearch] = useState(""); // debounced search
  const { data: areaData = [], isLoading: isAreasLoading } = useFindByArea();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, DEBOUNCE_DELAY),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = (query: string) => {
    setSearchInput(query);
    debouncedSearch(query);
  };

  const filtered = useMemo(() => {
    return areaData.filter((area: Area) =>
      area.strArea.toLowerCase().includes(search.toLowerCase())
    );
  }, [areaData, search]);
  
  const handleData = ( (area: Area)=> {
    router.push(`/country/${encodeURIComponent(area.strArea)}`);
  })

  return (
    <>
      <h1 className='mt-10 text-center text-xl font-bold'>Availiable Countries List</h1>
      <div className="mt-4 sm:mt-8 mr-4 ml-4">
          <SearchBar onSearch={handleSearch} />
      </div>
      <ScrollArea className="bg-white rounded-md shadow mx-auto w-[340px] sm:w-[620px] mt-4 max-h-[390px] overflow-y-auto">
        {isAreasLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="px-4 py-3 border-b">
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </>
        ):(
          <>
            {filtered.map((area: Area, idx: number) => {
              const code = area.strArea.slice(0, 2).toUpperCase();

              return (
                <div
                  key={idx}
                  className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-100 hover:cursor-pointer"
                  onClick={() => handleData(area)}
                >
                  <span className="font-mono font-bold text-sm w-8">{code}</span>
                  <span className="flex-1 ml-2">{area.strArea}</span>
                  <span className="text-sm text-gray-500 font-mono">{code}</span>
                </div>
              );
            })}
            <div className='flex flex-col justify-center items-center py-10'>
              {filtered.length === 0 && !isAreasLoading && (
                <>
                  <Image src={notFound} alt='no-data' width={100} height={100}/>
                  <div className="px-4 py-3 text-center text-sm text-gray-500">
                    No country found!
                  </div>
                </>
              )}
            </div>
          </>
        )}
        
      </ScrollArea>
    </>
  )
}

export default Country;
