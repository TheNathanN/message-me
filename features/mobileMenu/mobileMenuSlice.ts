import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface MobileMenuState {
  shown: boolean;
}

// Define the initial state using that type
const initialState: MobileMenuState = {
  shown: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMobileMenu: (state, action: PayloadAction<MobileMenuState>) => {
      const { shown } = action.payload;
      state.shown = shown;
    },
  },
});

export const { setMobileMenu } = mobileMenuSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMobileMenu = (state: RootState) => state.mobileMenu;

export default mobileMenuSlice.reducer;
