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
      const objId = action.payload;
      const obj = state.items.find((cartObj) => cartObj.objData.id === objId);
      if (obj.quantity === 1) {
        const ObjIdx = state.items.findIndex(
          (cartObj) => cartObj.objData.id === id
        );
        state.items.splice(objId, 1);
      } else {
        obj.quantity -= 1;
      }
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
