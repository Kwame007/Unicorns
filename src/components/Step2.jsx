import React from 'react'

const Step2 = () => {

    return (
        <>
            <div className="max-w-xl my-12 mx-auto">
            <form className="flex flex-col">
                <div className="w-full flex flex-row gap-x-2">
                    <div><input className="w-full px-5 py-2 border-2 border-black focus:ring-transparent placeholder:font-semibold placeholder:text-black placeholder:text-xl" type="text" placeholder="Pros"/></div>
                    <div><input className="w-full px-5 py-2 border-2 border-black focus:ring-transparent placeholder:font-semibold placeholder:text-black placeholder:text-xl" type="text" placeholder="Cons"/></div>
                </div>
                <div className="w-full my-6">
                    <textarea className="w-full px-5 py-5 border-2 border-black placeholder:font-semibold placeholder:text-black placeholder:text-xl" type="text" placeholder="Please provide your review summary here..."/>
                </div>
            </form>
            </div>
        </>
    )
}


export default Step2;
