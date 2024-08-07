import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>