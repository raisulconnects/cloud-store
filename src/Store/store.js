import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice";
import { apiSlice } from "../Features/apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (prevMiddleware) => prevMiddleware().concat(apiSlice.middleware),
});
