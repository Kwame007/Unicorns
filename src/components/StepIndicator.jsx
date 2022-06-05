import React, { useState } from 'react'
import { Step1, Step2, Step3, Step4 } from '../components'

const StepIndicator = () => {

    const [ active, setIsActive ] = useState(false)
    const [ completed, setIsCompleted ] = useState(false)

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
            <Step2 />
        </div>
 
        {/* step 3 */}
        <div>
            <Step3 />
        </div>

        {/* step 4 */}
        <div>
            <Step4 />
        </div>

        <div className="max-w-4xl mx-auto">
            <input type="submit" value={`Submit`} className="w-full px-5 py-2 bg-indigo-500 font-semibold text-xl text-white uppercase " onClick={() => console.log(`Next/Submitted`)}/>
        </div>

        </div>     
    )
}


export default StepIndicator
