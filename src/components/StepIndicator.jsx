import React, { useState } from 'react'
import { Step1 } from '../components'

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
