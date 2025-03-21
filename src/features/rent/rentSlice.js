import { createSlice } from "@reduxjs/toolkit";
import cars from "../../cars.js";

const initialState = {
  toRent: [],
  allCars: cars,
  totalRentPrice: 0,
};

export const rentSlice = createSlice({
  name: "Rent",
  initialState,
  reducers: {
    addToRent: (state, action) => {
      const alreadyRented = state.toRent.some(
        (item) => item.id === action.payload.id
      );

      if (!alreadyRented) state.toRent.push(action.payload);
    },
    removeFromRent: (state, action) => {
      state.toRent = state.toRent.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToRent, removeFromRent } = rentSlice.actions;
export default rentSlice.reducer;
