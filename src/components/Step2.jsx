import React, {useState, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setPros, setCons, setReviewSummary, } from '../features/review/reviewSlice'

const Step2 = () => {

    const userData = useSelector( (state) => state.review )
    const prosRef = React.useRef(null)
    const consRef= React.useRef(null)
    const summaryRef = React.useRef(null)

    const dispatch = useDispatch()

    return (
        <>
            <div className="max-w-4xl my-12 space-y-12 mx-auto">
            <form className="flex flex-col">
                <h2 className="text-left text-2xl text-black font-semibold">Write your <span className="text-indigo-500">comment</span></h2>
                <div className="w-full flex flex-col space-y-6 md:space-y-0 md:flex-row md:gap-x-4"> 
                    <div className="flex-1">
                        <p className="max-w-md text-left pt-2 text-lg text-slate-500 font-normal leading-5">Write about positive experiences you had while in this university. Short, concise and helpful information.</p>
                        <input className="w-full mt-4 px-5 py-2 border-2 border-black focus:outline-indigo-500 focus:ring-indigo-200 focus:ring-2 text-xl  placeholder:font-semibold placeholder:text-slate-500 placeholder:text-xl" type="text" placeholder="Pros" onChange={ (e) =>  dispatch(setPros(e.target.value)) } value={userData.pros} ref={prosRef} />
                    </div>
                    <div className="flex-1"> 
                        <p className="max-w-md text-left pt-0  md:pt-2 text-lg text-slate-500 font-normal leading-5">Write your negative experiences you had while in this university. Short, concise and helpful information.</p>
                        <input className="w-full mt-4 px-5 py-2 border-2 border-black focus:outline-indigo-500 focus:ring-indigo-200 focus:ring-2 text-xl placeholder:font-semibold placeholder:text-slate-500 placeholder:text-xl" type="text" placeholder="Cons" onChange={ (e) => dispatch(setCons(e.target.value)) } value={userData.cons} ref={consRef}/>
                    </div>
                </div>
                <div className="w-full my-6"> 
                    <p className="max-w-lg text-left pt-2 text-lg text-slate-500 font-normal leading-5">Write your total university experience while you were enrolled in this university. </p>
                    <textarea className="w-full h-40 mt-4 p-5 border-2 border-black text-xl  focus:outline-indigo-500 focus:ring-indigo-200 focus:ring-2 placeholder:font-semibold placeholder:text-slate-500 placeholder:text-xl" type="text" placeholder="Please provide your review summary here..." onChange={ (e) => dispatch(setReviewSummary(e.target.value)) } value={userData.reviewSummary} ref={summaryRef}/>
                </div>
            </form>
            </div>
        </>
    )
}


export default Step2;
