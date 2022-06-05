import React from 'react'


const Step4 = () => {

    return (
        <>
            <div className="max-w-4xl my-12 mx-auto">
                <h2 className="w-full text-left text-3xl text-black font-bold">You are about to submit your review entry for the <span className="text-indigo-500">[course]</span> at the <span className="text-indigo-500">[university] </span>:</h2>
                <div className="w-full bg-gray-100 px-5 py-4 mt-4">
                    <div className="flex justify-between">
                        <div className="flex flex-col flex-1">

                            <p className="text-left font-medium">Ratings</p> 
                            <div className="flex ">
                                <p className="text-left">Course rating - </p><span> 0/5 stars </span>
                            </div>

                            <div className="flex ">
                                <p className="text-left">Faculty rating - &nbsp; </p><span> 0/5 stars </span>
                            </div>

                            <div className="flex ">
                                <p className="text-left">Facilities rating - &nbsp; </p><span> 0/5 stars </span>
                            </div>

                            <div className="flex ">
                                <p className="text-left">Recommendation rating - &nbsp; </p><span> 0/5 stars </span>
                            </div>

                        </div>                         
                        <div className="flex-1">
                            <p className="text-left font-medium">Year</p>
                            <div className="flex flex-col">
                                <p className="text-left">Graduation year :</p> <span className="p-2 bg-indigo-300 text-white font-semibold">2002</span>
                                <p className="text-left">Anonymous review :</p> <span className="p-2 bg-indigo-300 text-white font-semibold">Yes</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-left font-medium">Review summary</p>
                        <div className="">
                            <p className="text-left">[Pros]</p>
                            <p className="text-left">[Cons]</p>
                            <p className="text-left">[Review Summary]</p>
                        </div>
                    </div>
                </div>
                    <p className="max-w-4xl mt-4 mb-12 text-slate-600 font-normal text-left text-lg">All reviews are screened for approval before being displayed.You can check to see if your review has been approved.</p>
            </div>
        </>
    )
}

export default Step4;
