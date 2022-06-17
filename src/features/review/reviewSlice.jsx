import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    univeristy: 'university',
    course: 'course',
    courseRating: 0,
    facultyRating: 0,
    facilitiesRating: 0,
    recommendationRating: 0,
    pros: 'Pros',
    cons: 'Cons',
    reviewSummary: 'Summary',
    gradYear: 2000,
    isAnon: false,
    alias: 'alias',
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
})


export default reviewSlice.reducer
