import { Header, ImgPost } from "../../../widgets"
import { getAllImagesByPage } from "../../../shared/apis/getAllPosts"
import { UnsplashPhoto } from "../../../widgets/post/model"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { SearchResult } from "../../../shared/utils/searchResult"

export function Main() {
  const [searchQuery, setSearchQuery] = useState("")
  const [result, setResult] = useState<UnsplashPhoto[]>([])
  const { data: posts } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: getAllImagesByPage,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  });

  useEffect(() => {
    if (posts) setResult(SearchResult(posts, searchQuery))
  }, [posts, searchQuery])

  return (
    <div className="flex flex-col ">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex flex-col w-full items-center gap-2 py-5">
        {result?.map((post: UnsplashPhoto) => (
          <ImgPost key={post.id} {...post} />
        ))}
      </main>
    </div>
  )
}

