import { createSlice } from "@reduxjs/toolkit";

let counter = 1;
export const placesSlice = createSlice({
  name: "places",
  initialState: {
    value: [],
  },
  reducers: {
    addPlace: (state, action) => {
      state.value.push({ id: counter++, ...action.payload });
    },
    removePlace: (state, action) => {      
      state.value = state.value.filter(
        (place) => place.id !== action.payload
      );
    },
    // incrementByAmount: (state, action) => {
    //   state.value = state.value.map(place =>
    //     place.id === action.payload.id
    //       ? { ...place, amount: place.amount + action.payload.amount }
    //       : place
    //   );
    // },
  },
});

export const { addPlace, removePlace, incrementByAmount } = placesSlice.actions;

export default placesSlice.reducer;
