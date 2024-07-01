import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      const data = action.payload;
      const cartObj = { objData: data, quantity: 1 };
      state.items.push(cartObj);
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const objIdx = state.items.findIndex(
        (cartObj) => cartObj.objData.id === id
      );
      state.items.splice(objIdx, 1);
    },
    clearCart: (state) => {
      state.action.length = 0;
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;