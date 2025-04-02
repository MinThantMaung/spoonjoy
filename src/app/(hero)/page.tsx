'use client'

import Image from "next/image";
import think from "../../../public/eating a variety of foods-bro.svg";
import cooking from "../../../public/Cooking-bro.svg";
import SearchBar from "../components/ui/SearchBar";
import Link from "next/link";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <section className="flex w-full">
      <div className="flex flex-col items-center justify-center text-center space-y-3 px-4 py-12 mx-auto">
          {/* Heading */}
        <div className="flex items-center gap-x-4 flex-wrap justify-center">
          <span className="text-5xl font-extrabold">Explore recipes</span>
          <Image src={think} alt="thinking" width={100} height={100}/>
          <span className="text-5xl font-extrabold">like a chef</span>
        </div>

        {/* Subheading */}
        <div className="flex items-center gap-x-4 flex-wrap justify-center">
          <span className="text-4xl font-semibold">Cook confidently</span>
          <Image src={cooking} alt="cooking" width={100} height={100}/>
          <span className="text-4xl font-semibold">every day</span>
        </div>

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
        <p>
          For a complete list of searchable countries, <Link href='country' className="text-blue-600 underline cursor-pointer">click here</Link>.
        </p>
        </div>
      </div>
    </section>
  );
}
