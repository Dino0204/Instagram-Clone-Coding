import { Header, ImgPost } from "../../../widgets"
import { getAllImages } from "../../../shared/apis/getAllPosts"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { UnsplashPhoto } from "../../../widgets/imgPost/model"

export function Main() {
  const { data: imgs } = useQuery<UnsplashPhoto[]>({ queryKey: ["imgs"], queryFn: getAllImages })
  const [searchQuery, setSearchQuery] = useState("")

  const results = imgs?.filter((img) =>
    img.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.alt_description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col ">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex flex-col w-full items-center gap-2 py-5">
        {/* {results?.map((post) => (
          <Post key={post.id} {...post} />
        ))} */}
        {results?.map((img) => (
          <ImgPost key={img.id} {...img} />
        ))}
      </main>
    </div>
  )
}

