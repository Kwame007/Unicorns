import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    university: 'uni',
    course: 'course',
    overallRating: 0,
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
    reducers: {
        setUniversity: (state, action) => {
            state.university = action.payload
        },
        selectedCourse: (state, action) => {
            state.course = action.payload
        },
        overallRating: (state, action) => {
            state.overallRating = action.payload
        },
        ratingCourse: (state, action) => {
            state.courseRating = action.payload
        },
        ratingFaculty: (state, action) => {
            state.facultyRating = action.payload
        },
        ratingFactilities: (state, action) => {
            state.facilitiesRating = action.payload
        },
        ratingRecommendation: (state, action) => {
            state.recommendationRating = action.payload
        },
        setPros: (state, action) => {
            state.pros = action.payload
        },
        setCons: (state, action) => {
            state.cons = action.payload
        }, 
        setGradYear: (state, action) => {
            state.gradYear = action.payload
        },
        isAnonTrue: (state, action) => {
            state.isAnon = !state.isAnon
        },
        setAlias: (state, action) => {
            state.alias = action.payload
        }
    },
})

export const { setUniversity, selectedCourse, ratingCourse, ratingFaculty, ratingFactilities, ratingRecommendation, setPros, setCons, setGradYear, isAnonTrue, setAlias } = reviewSlice.actions
export default reviewSlice.reducer
