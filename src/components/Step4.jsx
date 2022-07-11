import { useSelector } from 'react-redux'

const Step4 = () => {

    const data = useSelector( (state) => state.review )

    return (
        <>
            <div className="max-w-4xl my-12 mx-auto">
                <h2 className="w-full text-left text-2xl text-black font-bold">You are about to submit your review entry for the <span className="text-indigo-500">{data.course}</span> course at the <span className="text-indigo-500">{data.university} </span> university:</h2>

                <div className="w-full bg-gray-100 px-5 py-4 mt-4">
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="flex flex-col flex-none space-y-2">

                            <p className="text-left font-black text-3xl">Ratings</p> 
                            <div className="flex flex-col sm:items-center sm:flex-row">
                                <p className="text-left text-xl">Course rating - &nbsp; </p><span className="text-left pl-0 font-semibold text-2xl sm:pl-2"> {data.courseRating}/5<span className="text-yellow-400">★</span></span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <p className="text-left text-xl">Faculty rating - &nbsp; </p><span className="text-left pl-0 font-semibold text-2xl sm:pl-2"> {data.facultyRating}/5<span className="text-yellow-400">★</span> </span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <p className="text-left text-xl">Facilities rating - &nbsp; </p><span className="text-left pl-0 sm:pl-2 font-semibold text-2xl"> {data.facilitiesRating}/5<span className="text-yellow-400">★</span> </span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <p className="text-left text-xl">Recommendation rating - &nbsp; </p><span className="text-left pl-0 sm:pl-2 font-semibold text-2xl"> {data.recommendationRating}/5<span className="text-yellow-400">★</span> </span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <p className="text-left text-xl font-medium">Overall rating - &nbsp; </p><span className="tracking-widest text-4xl text-black font-bold"> <span className="text-indigo-500">{data.overallRating}</span>/5<span className="text-yellow-400">★</span></span>                             
                            </div>

                        </div>                         
                        <div className="flex-1 mt-6 ml-0 space-y-2 md:ml-12 md:mt-0">

                            <p className="text-left font-black text-3xl">Year</p>
                            <div className="flex flex-col">
                                <p className="text-left text-xl">Graduation year :</p> <span className="p-2 max-w-min max-h-min bg-indigo-300 text-white font-semibold">{data.gradYear}</span>
                                <p className="text-left text-xl">Review By :</p> <span className="p-2 max-w-max max-h-min bg-indigo-300 text-white font-semibold">{data.isAnon !== false?'Anonymous User':`${data.alias}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-left font-black text-3xl">Review summary</p>
                        <div className="py-4 space-y-2">
                            <p className="text-left text-lg">{data.pros}</p>
                            <p className="text-left text-lg">{data.cons}</p>
                            <p className="text-left text-lg">{data.reviewSummary}</p>
                        </div>
                    </div>
                </div>
                    <p className="max-w-4xl mt-4 mb-12 text-slate-600 font-normal text-left text-lg">All reviews are screened for approval before being displayed. You can check to see if your review has been approved.</p>
            </div>
        </>
    )
}

export default Step4;
