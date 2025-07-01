import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("wishlist")) || []

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishist: (state, action)=> {
            
        const existingProduct = state.find((item)=> item.id === action.payload.id)
        
        
        if (!existingProduct) {
            state.push(action.payload)
            // state = localStorage.
            localStorage.setItem("wishlist", JSON.stringify(state))
        }
    },
    removeToWishist: (state, action)=> {
        state = state.filter(item => item.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToWishist, removeToWishist} = wishlistSlice.actions

export default wishlistSlice.reducer