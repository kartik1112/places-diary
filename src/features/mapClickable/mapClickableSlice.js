import { createSlice } from "@reduxjs/toolkit";

export const clickableSlice = createSlice({
  name: "clickable",
  initialState: {
    value: true,
  },
  reducers: {
    setClickable: (state, action) => {
      state.value = action.payload; // Directly mutate the state
    },
    toggleClickable: (state) => {
      state.value = !state.value; // Directly mutate the state
    },
    getClickable: (state) => {
      return state.value; // Return the value
    },
  },
});

export const { setClickable, toggleClickable, getClickable } = clickableSlice.actions;

export default clickableSlice.reducer;