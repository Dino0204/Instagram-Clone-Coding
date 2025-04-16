import { Search } from "lucide-react";
import { useState } from "react";
import { SearchProps } from "../../../shared/types/search";

export function SearchInput({ searchQuery, setSearchQuery }: SearchProps) {
  const [inputValue, setInputValue] = useState(searchQuery)
  const handleChange = (value: string) => {
    setInputValue(value)
    setSearchQuery(value)
  }

  return (
    <form className="flex items-center p-2 border rounded-xl bg-gray-100 ">
      <input className="w-full outline-0" value={inputValue} onChange={(e) => handleChange(e.target.value)} />
      <button className="cursor-pointer">
        <Search width={32} />
      </button>
    </form>
  );
}