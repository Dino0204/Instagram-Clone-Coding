import { Search } from "lucide-react";
import { useState } from "react";
import { SearchProps } from "../../../shared/types/search";

export function SearchInput({ setSearchQuery }: SearchProps) {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchQuery(inputValue);
      event.preventDefault();
    }
  };

  return (
    <form className="flex items-center p-2 border rounded-xl bg-gray-100 ">
      <input className="w-full outline-0" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
      <button className="cursor-pointer">
        <Search width={32} />
      </button>
    </form>
  );
}