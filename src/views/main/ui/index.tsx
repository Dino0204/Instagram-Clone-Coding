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
    getNextPageParam: (allPages) => allPages.length + 1,
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
    const currentTarget = target.current;

    return () => {
      if (currentTarget && hasNextPage && !isFetchingNextPage) {
        console.log("등록:", currentTarget);
        observe(currentTarget);
      }
      else if (currentTarget && !hasNextPage) {
        console.log("해제:", currentTarget);
        unobserve(currentTarget)
      }
    }
  }, [hasNextPage, isFetchingNextPage, observe, unobserve])

  return (
    <div className="flex flex-col ">
      <Header setSearchQuery={setSearchQuery} />
      <main className="flex flex-col w-full items-center gap-2 py-5">
        {result?.map((post: UnsplashPhoto, index) => (
          <Post key={index} {...post} />
        ))}
        {result.length === 0 && searchQuery && <div className="w-full h-8 text-center">검색 결과가 없습니다.</div>}
        {searchQuery ? (<div>더 많은 게시물을 보시려면 검색어를 지워주세요.</div>) : (<div className="w-full h-8 text-center" ref={target}>{isFetchingNextPage ? "로딩중..." : "로딩완료!"}</div>)}
      </main >
    </div >
  )
}

