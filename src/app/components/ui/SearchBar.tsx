'use client'
import { useState } from 'react'
import { MapPin } from 'lucide-react'

type SearchBarProps = {
    placeholder?: string;
    onSearch: (query: string) => void;
    buttonLabel?: string;
  };

export default function SearchBar({
  placeholder = "Search by location...",
  buttonLabel = "Search",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full shadow-sm px-4 py-2 max-w-xl w-full mx-auto">
      <MapPin className="text-gray-400 text-lg mr-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="ml-4 bg-gradient-to-r from-green-300 to-green-500 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
