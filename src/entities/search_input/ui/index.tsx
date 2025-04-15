import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <form className="flex items-center p-2 border rounded-xl ">
      <input className="w-full outline-0" />
      <button className="cursor-pointer">
        <Search width={32} />
      </button>
    </form>
  );
}