import { configureStore } from '@reduxjs/toolkit'
import countSlice from "../features/count/countSlice"
import wishlistSlice from "../features/wishlist/wishlistSlice"

export const store = configureStore({
  reducer: {
    counter: countSlice,
    wishList: wishlistSlice
    // name: {name:"alamin", age: 23}
  },
})