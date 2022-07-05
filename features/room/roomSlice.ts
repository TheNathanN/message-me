import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface RoomState {
  roomName: string;
}

// Define the initial state using that type
const initialState: RoomState = {
  roomName: "Main Room",
};

export const roomSlice = createSlice({
  name: "room",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<RoomState>) => {
      const { roomName } = action.payload;
      state.roomName = roomName;
    },
  },
});

export const { setRoom } = roomSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRoom = (state: RootState) => state.room;

export default roomSlice.reducer;
