import React, { useState, useRef, useEffect } from 'react'
import { RatingButton } from '../components'


function Step1() {

    const [ overallRating, setOverallRating ] = useState(0)

    const [ courseRating, setCourseRating ] = useState(0)
    const [ facultyRating, setFacultyRating ] = useState(0)
    const [ facilityRating, setFacilityRating ] = useState(0)
    const [ recommendationRating, setRecommendationRating ] = useState(0)

    const show = useRef(false)

    function averageRating([...n]) {
        const sum = [...n].reduce((prev, curr) => prev + curr)
        const avg = sum/[...n].length
        if (!avg.isInteger && avg % 1 !== 0){
            return avg.toFixed(1)
        } else {
            return avg
        }
    }

    useEffect( () => {
        setOverallRating(averageRating([courseRating, facultyRating, facilityRating, recommendationRating]))
    })

    useEffect( () => {
        const p = show.current
        if (overallRating) { p.classList.replace('hidden', 'block') }
    }, [recommendationRating])
    
    
    return(
        <>
            <div className="flex flex-col max-w-4xl mx-auto space-y-12 mt-20 items-center">

        {/* rating course */}
            <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-black font-semibold">Rate the <span className="text-indigo-500">course</span></h2>
                    <p className="max-w-md pt-2 text-lg text-slate-800 font-normal leading-5">How did you find the execution and delivery of the course and course materials?</p>
                </div>
                <div className="flex flex-1 md:justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton setRating={ rating => setCourseRating(rating)}/>
                    </div>
                </div>
            </div>

        {/* rating faculty */}
            <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-black font-semibold">Rate the <span className="text-indigo-500">faculty</span></h2>
                    <p className="max-w-md pt-2 text-lg text-slate-800 font-normal leading-5">How did you find the faculty? Did it provide adequate support and information??</p>
                </div>
                <div className="flex flex-1 md:justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton setRating={rating => setFacultyRating(rating)}/>
                    </div>
                </div>
            </div>

        {/* rating facilities */}
            <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-black font-semibold">Rate the <span className="text-indigo-500">facilities</span></h2>
                    <p className="max-w-md pt-2 text-lg text-slate-800 font-normal leading-5">Did the facilities within the school meet your expectation?</p>
                </div>
                <div className="flex flex-1 md:justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton setRating={rating => setFacilityRating(rating)}/>
                    </div>
                </div>
            </div>

        {/* rating recommendations */}
            <div className="w-full flex flex-col space-y-5 md:flex-row md:space-y-0">
                <div className="flex flex-col flex-1 text-left">
                    <h2 className="text-2xl text-black font-semibold">Rate the <span className="text-indigo-500">recommnedation</span></h2>
                    <p className="max-w-md pt-2 text-lg text-slate-800 font-normal leading-5">Taking everything into consideration, are you able to recommend this institution to anyone?</p>
                </div>
                <div className="flex flex-1 md:justify-end">
                    <div className="text-5xl text-gray-300 space-x-0.5">
                        <RatingButton setRating={rating => setRecommendationRating(rating)}/>
                    </div>
                </div>
            </div>

            </div> 
            <p ref={show} className="text-2xl mt-10 mb-10 font-normal hidden">
                Your Overall Rating : <b className="tracking-widest text-4xl text-black font-bold"><span className="text-indigo-500">{overallRating}</span>/5<span className="text-yellow-400">★</span></b>
            </p>
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
