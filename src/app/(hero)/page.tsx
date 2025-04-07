'use client'

import Image from "next/image";
import think from "../../../public/eating a variety of foods-bro.svg";
import cooking from "../../../public/Cooking-bro.svg";
import SearchBar from "../components/ui/SearchBar";
import Link from "next/link";
import Head from 'next/head';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSearch = (query: string) => {
    router.push(`/country/${encodeURIComponent(query)}`);
  };
  return (
    <>
      <Head>
        <title>Explore Recipes | Cook Confidently</title>
        <meta name="description" content="Explore delicious recipes crafted by chefs and cook confidently every day." />
      </Head>
      <section className="flex w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-3 px-3 sm:px-4 py-12 mx-auto">
            {/* Heading */}
          <header className="sm:flex items-center sm:gap-x-4 flex-wrap justify-center">
            <span className="text-4xl sm:text-5xl font-extrabold">Explore recipes</span>
            <div className="flex justify-center items-center">
              <Image src={think} alt="Illustration of a person thinking about food" className="w-20 h-20 sm:h-36 sm:w-36 sm:flex justify-center items-center"/>
            </div>
            <span className="text-4xl sm:text-5xl font-extrabold">like a chef</span>
          </header>

          {/* Subheading */}
          <header className="sm:flex items-center gap-x-4 flex-wrap justify-center">
            <span className="text-xl sm:text-4xl font-semibold">Cook confidently</span>
            <div className="flex justify-center items-center">
              <Image src={cooking} alt="Illustration of someone cooking" width={100} height={100}/>
            </div>
            <span className="text-xl sm:text-4xl font-semibold">every day</span>
          </header>

          {/* Description */}
          <div className="text-gray-600 text-sm sm:text-lg">
            <p>Crafted by chefs, inspired by global flavors.</p>
            <p>From discovery to dining — all in a single tap.</p>
          </div>

          {/* Search bar */}
          <div className="w-full mt-4 sm:mt-10">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Country */}
          <div className="text-gray-600 mt-6 mb-12">
          <Link href="country" aria-label="View complete list of countries" className="text-blue-600 underline cursor-pointer">
              Explore our full list of countries
          </Link>
          </div>
        </div>
      </section>
    </>
  );
}
