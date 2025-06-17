import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"

const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setTotalItem(state, value) {
            state.token = value.payload;
        },
        //add to cart 
        // addToCart:(state,action)=>{
            
        // },
        //removefromcart
        //resetcart
        
        resetCart: (state) => {
            state.cart = []
            state.total = 0
            state.totalItems = 0
            // Update to localstorage
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
        },
    },
});

export const { setTotalItem,resetCart } = cartSlice.actions;
export default cartSlice.reducer;