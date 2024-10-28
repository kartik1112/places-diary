import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "../features/places/PlacesSlice";

export default configureStore({
  reducer: {
    places: placesReducer,
  },
});
