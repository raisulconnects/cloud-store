import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = state.find((prod) => prod.id === action.payload.id);

      product
        ? product.quantity++
        : state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload.id);
    },

    modifyQuantity: (state, action) => {
      const targetProd = state.find((prod) => prod.id === action.payload.id);
      if (targetProd) {
        targetProd.quantity = action.payload.amount;
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, modifyQuantity, clearCart } =
  cartSlice.actions;
