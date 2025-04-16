// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { posts, users } from "./data";

export const handlers = [
  http.get("api/posts", () => {
    return HttpResponse.json(posts);
  }),
  http.get("/api/users", () => {
    return HttpResponse.json(users);
  }),
];
