import { Header, Post } from "../../../widgets"
import posts from "../../../shared/mocks/post.json"

export function Main() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="mt-20 flex flex-col gap-2 py-5">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </div>
  )
}

