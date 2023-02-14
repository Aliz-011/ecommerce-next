import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartTotal: 0,
    totalAfterDiscount: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.cartTotal += action.payload.price + action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.cartTotal = 0;
      state.totalAfterDiscount = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
