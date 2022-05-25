import React, { useState, useRef, useEffect } from 'react'
import { RatingButton } from '../components'


function Step1(props) {

    //const rating = useRef(0)
    const [ rateCount, setRateCount ] = useState(0)

    const [ facultyRating, setFactultyRating ] = useState(0)

    useEffect( () => {
        console.log(props.rating)
    },[props.rating])
    
    return(
        <>
            <div className="flex flex-col max-w-4xl mx-auto space-y-12 mt-20 items-center">

        {/* rating course */}
            <div className="flex w-full">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-slate-700 font-semibold">Rate the <span className="text-indigo-400">course</span></h2>
                    <p className="text-md leading-5">How did you find the execution and delivery of the course and course materials?</p>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton value={props.rating} />
                    </div>
                </div>
            </div>

        {/* rating faculty */}
            <div className="flex w-full">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-slate-700 font-semibold">Rate the <span className="text-indigo-400">faculty</span></h2>
                    <p className="text-md leading-5">How did you find faculty? Did it provide adequate support and information??</p>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton />
                    </div>
                </div>
            </div>

        {/* rating facilities */}
            <div className="flex w-full">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-slate-700 font-semibold">Rate the <span className="text-indigo-400">facilities</span></h2>
                    <p className="text-md leading-5">Did the facilities within the school meet your expectation?</p>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton />
                    </div>
                </div>
            </div>

        {/* rating recommendations */}
            <div className="flex w-full">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-slate-700 font-semibold">Rate the <span className="text-indigo-400">recommnedation</span></h2>
                    <p className="text-md leading-5">Taking everything into consideration, are you able to recommend this institution to anyone?</p>
                </div>
                <div className="flex flex-1 justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton />
                    </div>
                </div>
            </div>

            </div> 
            <p className="text-5xl mt-10 font-medium">{props.rating} | {rateCount}</p>
        </>
    )
}


const StepIndicator = () => {

    const [ active, setIsActive ] = useState(false)

    return (
        <div>
            {/*
            step 1: Star rating of course, faculty, facilities, recommendation.
            step 2: Comments. Pros, Cons, Suggestions, Review Summary
            step 3: Alumni year. Your year of graduation or completion
            step 4: Review all provided/submitted info
            */}
        <ul className="flex justify-center max-w-4xl mx-auto text-2xl space-x-9">
            <li className="text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full"> 1 </li>
            <li className="text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full"> 2 </li>
            <li className="text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full"> 3 </li>
            <li className="text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full"> 4 </li>
        </ul>

        {/* step 1 */}
        <div> 
            <Step1 />
        </div>

        {/* step 2 */}
        <div>
        </div>
 
        {/* step 3 */}
        <div>
        </div>

        {/* step 4 */}
        <div>
        </div>
        
        </div>
    )
}


export default StepIndicator
