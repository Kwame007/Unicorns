import React from 'react'

const Step2 = () => {

    return (
        <>
            <div className="max-w-4xl my-12 mx-auto">
            <form className="flex flex-col">
                <div className="w-full flex flex-col space-y-6 md:flex-row md:gap-x-2">
                    <div className="flex-1">
                        <h2 className="text-left text-2xl text-black font-semibold ">Write your comment</h2>
                        <p className="max-w-md text-left pt-2 text-lg text-slate-800 font-normal leading-5">Write a positive experience you had while in this university. Short, concise and helpful information.</p>
                        <input className="w-full mt-4 px-5 py-2 border-2 border-black focus:ring-transparent placeholder:font-semibold placeholder:text-black placeholder:text-xl" type="text" placeholder="Pros"/>
                    </div>
                    <div className="flex-1"> 
                        <h2 className="leading-3">&nbsp;</h2>
                        <p className="max-w-md text-left pt-2 text-lg text-slate-800 font-normal leading-5">Write a negative experience you had while in this university. Short, concise and helpful information.</p>
                        <input className="w-full mt-4 px-5 py-2 border-2 border-black focus:ring-transparent placeholder:font-semibold placeholder:text-black placeholder:text-xl" type="text" placeholder="Cons"/>
                    </div>
                </div>
                <div className="w-full my-6"> 
                    <p className="max-w-md text-left pt-2 text-lg text-slate-800 font-normal leading-5">Write any positive experience you had while in this university. Short, concise and helpful information.</p>
                    <textarea className="w-full px-5 py-5 border-2 border-black placeholder:font-semibold placeholder:text-black placeholder:text-xl" type="text" placeholder="Please provide your review summary here..."/>
                </div>
            </form>
            </div>
        </>
    )
}


export default Step2;
