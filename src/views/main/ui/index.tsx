import { Header, Post } from "../../../widgets"
import { getAllPosts } from "../../../shared/apis/getAllPosts"
import { useQuery } from "@tanstack/react-query"
import { PostProps } from "../../../widgets/post/model"
import { useState } from "react"

export function Main() {
  const { data: posts } = useQuery<PostProps[]>({ queryKey: ["posts"], queryFn: getAllPosts })
  const [searchQuery, setSearchQuery] = useState("")

  const results = posts?.filter((post) =>
    post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.location?.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col ">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex flex-col gap-2 py-5">
        {results?.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </div>
  )
}

