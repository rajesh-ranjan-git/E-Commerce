import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      const data = action.payload;
      const objId = data.id;
      const obj = state.items.find((cartObj) => cartObj.objData.id === objId);

      if (obj) {
        obj.quantity = obj.quantity + 1;
      } else {
        const cartObj = { objData: data, quantity: 1 };
        state.items.push(cartObj);
      }
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const objIdx = state.items.findIndex(
        (cartObj) => cartObj.objData.id === id
      );
      state.items.splice(objIdx, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    incrementQuantity: (state, action) => {
      const objId = action.payload;
      const obj = state.items.find((cartObj) => cartObj.objData.id === objId);
      obj.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const obj = state.items.find((cartObj) => cartObj.objData.id === id);
      if (obj.quantity === 1) {
        const objId = state.items.findIndex(
          (cartObj) => cartObj.objData.id === id
        );
        state.items.splice(objId, 1);
      } else {
        obj.quantity -= 1;
      }
    },
    sortAscendingPrice: (state) => {
      state.items.sort((a, b) => a.objData.price - b.objData.price);
    },
    sortDescendingPrice: (state) => {
      state.items.sort((a, b) => b.objData.price - a.objData.price);
    },
    sortAscendingRating: (state) => {
      state.items.sort((a, b) => a.objData.rating - b.objData.rating);
    },
    sortDescendingRating: (state) => {
      state.items.sort((a, b) => b.objData.rating - a.objData.rating);
    },
  },
});

export const {
  addCart,
  removeCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  sortAscendingPrice,
  sortDescendingPrice,
  sortAscendingRating,
  sortDescendingRating,
} = cartSlice.actions;
export default cartSlice.reducer;
