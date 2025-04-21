import { Header, Post } from "../../../widgets"
import { getAllImagesByPage } from "../../../shared/apis/getAllPosts"
import { UnsplashPhoto } from "../../../widgets/post/model"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useState, useEffect, useRef } from "react"
import { useInterSectionsObserver } from "../../../shared/hooks/useInterSectionsObserver"
import { SearchResult } from "../../../shared/utils/searchResult"

export function Main() {
  const { data: posts, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => getAllImagesByPage({ pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
    initialPageParam: 1
  });
  const [searchQuery, setSearchQuery] = useState("")
  const [result, setResult] = useState<UnsplashPhoto[]>([])
  const { observe, unobserve } = useInterSectionsObserver(() => fetchNextPage())
  const target = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (posts) setResult(SearchResult(posts, searchQuery))
  }, [posts, searchQuery])

  useEffect(() => {
    window.scrollTo(0, 0)
    const currentTarget = target.current;

    return () => {
      if (currentTarget && hasNextPage && !isFetchingNextPage) {
        console.log("타겟:", currentTarget);
        observe(currentTarget);
      }
      else if (currentTarget && !hasNextPage) {
        console.log("타겟 해제:", currentTarget);
        unobserve(currentTarget)
      }
    }
  }, [hasNextPage, isFetchingNextPage, observe, unobserve])

  return (
    <div className="flex flex-col ">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex flex-col w-full items-center gap-2 py-5">
        {result?.map((post: UnsplashPhoto, index) => (
          <Post key={index} {...post} />
        ))}
        <div className="w-full h-8 text-center" ref={target}>{isFetchingNextPage ? "로딩중..." : "로딩완료!"}</div>
      </main >
    </div >
  )
}

