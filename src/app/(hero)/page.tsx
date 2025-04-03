'use client'

import Image from "next/image";
import think from "../../../public/eating a variety of foods-bro.svg";
import cooking from "../../../public/Cooking-bro.svg";
import SearchBar from "../components/ui/SearchBar";
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <Head>
        <title>Explore Recipes | Cook Confidently</title>
        <meta name="description" content="Explore delicious recipes crafted by chefs and cook confidently every day." />
      </Head>
      <section className="flex w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-3 px-4 py-12 mx-auto">
            {/* Heading */}
          <header className="flex items-center gap-x-4 flex-wrap justify-center">
            <span className="text-5xl font-extrabold">Explore recipes</span>
            <Image src={think} alt="Illustration of a person thinking about food" width={100} height={100}/>
            <span className="text-5xl font-extrabold">like a chef</span>
          </header>

          {/* Subheading */}
          <header className="flex items-center gap-x-4 flex-wrap justify-center">
            <span className="text-4xl font-semibold">Cook confidently</span>
            <Image src={cooking} alt="Illustration of someone cooking" width={100} height={100}/>
            <span className="text-4xl font-semibold">every day</span>
          </header>

          {/* Description */}
          <div className="text-gray-600 text-lg">
            <p>Crafted by chefs, inspired by global flavors.</p>
            <p>From discovery to dining — all in a single tap.</p>
          </div>

          {/* Search bar */}
          <div className="w-full mt-10">
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
