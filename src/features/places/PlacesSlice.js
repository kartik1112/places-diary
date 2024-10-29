import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("places");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return [];
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("places", serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

let counter = 0;

const placesSlice = createSlice({
  name: "places",
  initialState: {
    value: loadState(),
  },
  reducers: {
    addPlace: (state, action) => {
      state.value.push({ id: counter++, ...action.payload });
      saveState(state.value); // Save to localStorage
    },
    removePlace: (state, action) => {
      state.value = state.value.filter((place) => place.id !== action.payload);
      saveState(state.value); // Save to localStorage
    },
  },
});

export const { addPlace, removePlace } = placesSlice.actions;
export default placesSlice.reducer;
