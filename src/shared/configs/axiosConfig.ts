import axios from "axios";

// Unsplash API를 위한 Axios 인스턴스 생성
export const unsplashAxios = axios.create({
  baseURL: "https://api.unsplash.com",
});

// API 키
const UNSPLASH_API_KEY = "01um49pod7AxC99915wN0hIvUcLiotG_VwPjfV8hYXk";

// 요청 인터셉터 추가
unsplashAxios.interceptors.request.use((config) => {
  // Authorization 헤더에 API 키 추가
  config.headers["Authorization"] = `Client-ID ${UNSPLASH_API_KEY}`;
  return config;
});
