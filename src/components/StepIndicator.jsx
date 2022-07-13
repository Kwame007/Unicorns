import React, { useCallback, useState } from 'react'
import { Step1, Step2, Step3, Step4 } from '../components'

const StepIndicator = () => {

    const [ curr, setCurr ] = useState(1)
    const [ isActive, setIsActive ] = useState(false)
    const steps = [
        <Step1 />,
        <Step2 />,
        <Step3 />,
        <Step4 />
    ]

    const renderStep = useCallback(() => {

            switch (curr) {
                case 1:
                    return <Step1 />
                case 2:
                    return <Step2 />
                case 3:
                    return <Step3 />
                case 4:
                    return <Step4 />
            }
    }, [curr])

    const stepping = React.useMemo( () => {

        if(curr == 1){
            return <Step1 />
        } else if (curr == 2) {
            return <Step2 />
        } else if (curr == 3) {
            return <Step3 />
        } else if (curr == 4) {
            return <Step4 />
        }

    }, [curr])


    const nextStep = () => {
        setCurr(curr + 1)
        console.log(curr)
    }
    
    const prevStep = () => {
        if(curr !== 0)
        setCurr(curr - 1)
        console.log(curr)
    }


    function submitReview() {}


    return (
        <div>
            {/*
            step 1: Star rating of course, faculty, facilities, recommendation.
            step 2: Comments. Pros, Cons, Suggestions, Review Summary
            step 3: Alumni year. Your year of graduation or completion
            step 4: Review all provided/submitted info
            */}
        <ul className="flex justify-center max-w-4xl mx-auto text-2xl space-x-9">
            <li className="text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full">
               <button onClick={() => setCurr(1)}> 1 </button>  
            </li>
            <li className={`text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full`}>  
               <button onClick={() => setCurr(2)}> 2 </button>  
            </li>
            <li className={`text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full`}>   
               <button onClick={() => setCurr(3)}> 3 </button>  
            </li>
            <li className={`text-black font-medium bg-white w-9 h-9 border-2 border-black rounded-full`}> 
               <button onClick={() => setCurr(4)}> 4 </button>  
            </li>
        </ul>

        <div className="w-full max-h-min mb-10">        
        {
            //steps.map( item => item )
            //renderStep()
        }
        </div>       

        <div className="flex max-w-4xl gap-4 mx-auto ">
            <input type="submit" value={`Previous`} className="w-full px-5 py-2 bg-slate-400 font-semibold text-xl text-white uppercase cursor-pointer" onClick={ () => prevStep() } />
            <input type="submit" value={curr==4?`Submit`:`Next`} className="w-full px-5 py-2 bg-indigo-500 font-semibold text-xl text-white uppercase cursor-pointer" onClick={() => { if(curr == 4){submitReview()} else{ nextStep()} } } />
        </div>
        </div>
    )
}


export default StepIndicator
