import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //  dear Fahd I modified the add product so here I checked if the product is already on the cart , then I will increment the product 
      // find the product by Id 
      const productExist = (product) => product._id === action.payload._id
      // find the index of that product
      const productIndex = state.products.findIndex(productExist)
      // if we find the product then we will only increment the quantity 
      if (productIndex >= 0) {
        state.products[productIndex].quantity += action.payload.quantity
      } else {
        state.quantity += 1
        state.products.push(action.payload);

      }

      state.total += action.payload.price * action.payload.quantity;
      state.total = parseFloat(state.total.toFixed(2))
    },

    // you should do the same for remove product
    removeProduct: (state, action) => {
      const productExist = (product) => product._id === action.payload._id

      const productIndex = state.products.findIndex(productExist)

      if ( state.products[productIndex].quantity>0 ){
        state.products[productIndex].quantity -= action.payload.quantity
      }                                                                                                                                                                                             

        if( state.products[productIndex].quantity === 0)  {
          state.products.splice(productIndex, 1)
          state.quantity = state.quantity - 1;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
       
       
       console.log("quantity", action.payload.quantity, "price", action.payload.price );
      
      state.total -= (action.payload.price * action.payload.quantity);
      state.total = parseFloat(state.total.toFixed(2))
      // else {
      //   state.quantity -= 1;
      //   // state.products.push(action.payload);
      //   state.products.pop(action.payload);
      // }
    
     
    }
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
