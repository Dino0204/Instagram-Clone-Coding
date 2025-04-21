import { UnsplashPhoto } from "../../widgets/post/model";

interface PostsProps {
  pages: Array<UnsplashPhoto[]>;
}

export const SearchResult = (posts: PostsProps, searchQuery: string) => {
  const results = posts?.pages.flat().filter((post: UnsplashPhoto) =>
    post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.alt_description?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return results;
};
