import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice";
import UserReducer from "./slice/UserReducer";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: UserReducer,
  },
});
