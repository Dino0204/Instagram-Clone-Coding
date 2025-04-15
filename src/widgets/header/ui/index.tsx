import { SearchInput } from "../../../entities"
import { CircleUserRoundIcon } from "lucide-react"

export function Header() {
  return (
    <div className="fixed top-0 bg-white z-20 grid grid-cols-3 gap-10 items-center w-full h-20 py-1 px-10 border-b-2 overflow-hidden">
      <img src="../public/instarrail_logo.png" alt="logo" width={100} />
      <SearchInput />
      <CircleUserRoundIcon className="justify-self-end" />
    </div>
  )
}

