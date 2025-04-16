import axios from "axios";

export const getAllPosts = async () => {
  try {
    const res = await axios.get("/api/posts");
    return res.data;
  } catch (error) {
    console.error("데이터 로딩 오류:", error);
    throw error;
  }
};
