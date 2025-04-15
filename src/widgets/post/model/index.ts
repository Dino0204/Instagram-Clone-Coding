// 사용자 정보 인터페이스
export interface User {
  id: string;
  username: string;
  full_name: string;
  profile_picture: string;
}

// 위치 정보 인터페이스
export interface Location {
  id: string;
  name: string;
}

// 댓글 인터페이스
export interface Comment {
  id: string;
  user: string; // 댓글 작성자의 username
  text: string;
  created_at: string; // ISO 8601 형식의 날짜 문자열
}

// 게시물 인터페이스
export interface PostProps {
  id: string;
  user: User;
  image_url: string;
  caption: string;
  location: Location | null;
  created_at: string; // ISO 8601 형식의 날짜 문자열
  likes_count: number;
  comments: Comment[];
  tags: string[]; // 해시태그 배열
}
