import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "../features/places/PlacesSlice";
import clickableReducer from "../features/mapClickable/mapClickableSlice";

export default configureStore({
  reducer: {
    places: placesReducer,
    clickable:clickableReducer,
  },
});
