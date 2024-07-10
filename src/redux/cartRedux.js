import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    tax: 0,
    quantity: 0,
    subAmount: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);

    },
    increment: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    getCartProducts: (state, action) => {
      return {
        ...state,
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      state.products = removeItem;
    },
    getCartCount: (state, action) => {
      let cartCount = state.products.reduce((total, item) => {
        return item.quantity + total
      }, 0)
      state.totalCount = cartCount
    },
    getSubTotal: (state, action) => {
      state.subAmount = state.products.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)
    },
    calculateTax: (state, action) => {
      // GST value: 18% => action.payload
      let totalTax = (18 / 100) * state.subAmount
      state.tax = totalTax
    },
    getTotalAmount: (state, action) => {
      state.total = state.tax + state.subAmount
    },
  },
});

export const { addProduct, getCartCount, getCartProducts, removeItem,
  getSubTotal,
  increment,
  decrement,
  calculateTax,
  getTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
