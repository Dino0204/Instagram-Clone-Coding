import axios from "axios";
import { unsplashAxios } from "../configs/axiosConfig";

export const getAllPosts = async () => {
  try {
    const res = await axios.get("/api/posts");
    return res.data;
  } catch (error) {
    console.error("데이터 로딩 오류:", error);
    throw error;
  }
};

export const getAllImages = async () => {
  try {
    const res = await unsplashAxios.get("https://api.unsplash.com/photos/");
    return res.data;
  } catch (error) {
    console.error("데이터 로딩 오류:", error);
    throw error;
  }
};
