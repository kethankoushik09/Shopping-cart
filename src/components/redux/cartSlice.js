import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

export const fetchproductsdata = createAsyncThunk("prducts/fetching",
    async (_,thunkAPI)=>{
        const response = await fetch("https://fakestoreapi.com/products?limit=100");
        const data = await response.json();
        console.log(data);
        return data
        
    }
)

const INITIALSTATE = {cart:[], loading:false, products:[], error:null};

export const cartSlice = createSlice({
    name:"cart",
    initialState:INITIALSTATE,
    reducers:{
        // addcart:(state,action)=>{
        //     console.log("addd");
        //     state.cart.push(action.payload);
        // },
        // delcart:(state,action)=>{
        //     const temp = [...state.cart];
        //     state.cart = state.cart.filter(item => item.id !== action.payload); 
        // }
        addcart: (state, action) => {
            const itemToAdd = action.payload; // payload should contain the full item, not just id
            const itemExists = state.cart.find(item => item.id === itemToAdd.id);
            if (!itemExists) {
                state.cart.push(itemToAdd); // Add item to cart if it does not exist
            }
        },
        delcart: (state, action) => {
            const itemId = action.payload; // payload contains the id of the item to remove
            state.cart = state.cart.filter(item => item.id !== itemId); // Remove item by id
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproductsdata.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.loading = false
        })
        .addCase(fetchproductsdata.pending,(state,action)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchproductsdata.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }

})

export const cartReducer = cartSlice.reducer;
export const cartSelector = (state)=>state.cart;
export const {addcart,delcart} = cartSlice.actions;

