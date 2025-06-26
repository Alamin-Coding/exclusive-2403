import { configureStore } from '@reduxjs/toolkit'
import countSlice from "../features/count/countSlice"

export const store = configureStore({
  reducer: {
    count: countSlice
  },
})