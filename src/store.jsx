import { configureStore } from '@reduxjs/toolkit'
import reviewSlice from './features/review/reviewSlice'

export const store = configureStore({
    reducer: {
        review: reviewSlice, 
    },
})
