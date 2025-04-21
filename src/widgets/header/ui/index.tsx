import { SearchInput } from "../../../entities"
import { CircleUserRoundIcon } from "lucide-react"
import { SearchProps } from "../../../shared/types/search"
import { useNavigate } from "react-router-dom"

export function Header({ setSearchQuery }: SearchProps) {
  const go = useNavigate()

  return (
    <div className="sticky top-0 bg-white z-20 grid grid-cols-3 gap-10 items-center w-full h-20 py-1 px-10 border-b-2 overflow-hidden">
      <div className="py-2 h-full overflow-hidden">
        <img src="../public/instarrail_logo.png" alt="logo" className="h-full object-cover cursor-pointer" onClick={() => go("/")} />
      </div>
      <SearchInput setSearchQuery={setSearchQuery} />
      <CircleUserRoundIcon className="justify-self-end" />
    </div>
  )
}

