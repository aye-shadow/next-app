import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItemIndex = state.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push(newItem);
      }
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      const idToRemove = action.payload.id;
      const existingItemIndex = state.findIndex(item => item.id === idToRemove);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
      }
    }
  }
});

export const selectTotalItems = (state: RootState) => {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
};

export const selectTotalPrice = (state: RootState) => {
  const totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return totalPrice.toFixed(2); // Limiting the result to 2 decimal places
};

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
