import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import mobileMenuReducer from "../features/mobileMenu/mobileMenuSlice";
import roomReducer from "../features/room/roomSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mobileMenu: mobileMenuReducer,
    room: roomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
