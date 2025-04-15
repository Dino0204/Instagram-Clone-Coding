import { PostProps } from "../../widgets/post/model";

// 전체 인스타그램 데이터 인터페이스 (게시물 배열)
export interface InstagramData {
  posts: PostProps[];
}

// 예시 사용법:
// const instagramData: InstagramData = { posts: [...] };
