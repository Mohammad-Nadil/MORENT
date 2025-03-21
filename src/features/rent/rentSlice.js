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

      if (!alreadyRented) {
        state.toRent.push(action.payload);
        state.totalRentPrice += action.payload.rental_price_per_day;
      }
    },
    removeFromRent: (state, action) => {
      const carToRemove = state.toRent.find(
        (item) => item.id === action.payload.id
      );

      if (carToRemove) {
        state.toRent = state.toRent.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalRentPrice -= carToRemove.rental_price_per_day; 
      }
    },
  },
});

export const { addToRent, removeFromRent } = rentSlice.actions;
export default rentSlice.reducer;
