import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
