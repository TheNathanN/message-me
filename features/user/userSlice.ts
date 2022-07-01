import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface UserState {
  id: string;
  userName: string;
  email: string;
  photoURL: string;
}

// Define the initial state using that type
const initialState: UserState = {
  id: "",
  userName: "",
  email: "",
  photoURL: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { id, email, userName, photoURL } = action.payload;
      state.id = id;
      state.email = email;
      state.userName = userName;
      state.photoURL = photoURL;
    },
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
