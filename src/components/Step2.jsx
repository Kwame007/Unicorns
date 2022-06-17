import React from 'react'
import { useDispatch } from 'react-redux'
import {setPros} from '../features/review/reviewSlice'

const Step2 = () => {

    const dispatch = useDispatch()

    return (
        <>
            <div className="max-w-4xl my-12 mx-auto">
            <form className="flex flex-col">
                <h2 className="text-left text-2xl text-black font-semibold">Write your <span className="text-indigo-500">comment</span></h2>
                <div className="w-full flex flex-col space-y-6 md:space-y-0 md:flex-row md:gap-x-4"> 
                    <div className="flex-1">
                        <p className="max-w-md text-left pt-2 text-lg text-slate-500 font-normal leading-5">Write about positive experiences you had while in this university. Short, concise and helpful information.</p>
                        <input className="w-full mt-4 px-5 py-2 border-2 border-black focus:outline-indigo-500 focus:ring-indigo-200 focus:ring-2 text-xl  placeholder:font-semibold placeholder:text-slate-500 placeholder:text-xl" type="text" placeholder="Pros" onSubmit={ (e) => {  console.log(e.target.value) }}/>
                    </div>
                    <div className="flex-1"> 
                        <p className="max-w-md text-left pt-0  md:pt-2 text-lg text-slate-500 font-normal leading-5">Write your negative experiences you had while in this university. Short, concise and helpful information.</p>
                        <input className="w-full mt-4 px-5 py-2 border-2 border-black focus-outline-indigo-500 focus:ring-indigo-200 focus:ring-2 text-xl placeholder:font-semibold placeholder:text-slate-500 placeholder:text-xl" type="text" placeholder="Cons"/>
                    </div>
                </div>
                <div className="w-full my-6"> 
                    <p className="max-w-lg text-left pt-2 text-lg text-slate-500 font-normal leading-5">Write your total university experience while you were enrolled in this university. </p>
                    <textarea className="w-full h-40 mt-4 p-5 border-2 border-black text-xl  focus:outline-indigo-500 focus:ring-indigo-200 focus:ring-2 placeholder:font-semibold placeholder:text-slate-500 placeholder:text-xl" type="text" placeholder="Please provide your review summary here..."/>
                </div>
            </form>
            </div>
        </>
    )
}


export default Step2;
