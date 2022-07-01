import React from "react";
import { Layout, StepIndicator } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_UNICORNS } from "../../graphql/queries";
import { useDispatch } from "react-redux";
import { setUniversity, selectedCourse } from "../../features/review/reviewSlice";

const WriteReview = () => {

    const dispatch = useDispatch()
    const [uni, setUni] = React.useState()
    const [course, setCourse] = React.useState()
    const [uniData, setUniData] = React.useState([])
    const [courseData, setCourseData] = React.useState([])
    const { loading, data, error } = useQuery(GET_UNICORNS, 
    {
        onCompleted: (data) => {
            data && (
                setUniData(data?.universities)
            ),
            (
                setCourseData(data?.courses)
            )
        },
    })


  return (
    <>
      <Layout>
        <h1 className="text-left px-6 mt-10 text-3xl font-bold mx-auto max-w-4xl"> Add your review</h1>
        <div className="px-6 flex flex-col space-y-8 mx-auto my-12 justify-between max-w-4xl gap-x-0 md:gap-x-4 md:flex-row md:space-y-0">

            <select className="w-full p-2 text-xl font-semibold text-black border-2 border-black md:w-1/2" value={uni} onChange={ (e) => {
                        setUni(e.target.value); 
                        dispatch(setUniversity(e.target.value))
                    } 
                }>
                <option value="">Select University</option>
                { 
                    uniData && ( 
                        uniData.map( ({name, slug}, index) => ( 
                            <option key={index} value={slug}>{name}</option>
                            ) 
                        ) 
                    )
                }
            </select>

            <select className="w-full p-2 text-xl font-semibold text-black border-2 border-black md:w-1/2" value={course} onChange={ (e) => {setCourse(e.target.value); dispatch(selectedCourse(e.target.value))} }>
                <option>Select Course</option>
                {
                    uni
                    ?(
                        courseData.filter((item) => ( uni === item.courseAt.slug) ).map( ({courseTitle, courseCode}, index) => (<option key={index} value={courseTitle}>{courseCode} - {courseTitle}</option>) )
                    )
                    :(
                        courseData.map( ({courseCode, courseTitle}, index) => (
                            <option key={index} value={courseTitle}>{courseCode} - {courseTitle}</option>
                        ))
                    )
                }
            </select>

        </div>
        
        <div className="my-12 px-6">
            <StepIndicator />  
        </div>

      </Layout>
    </>
  );
};

export default WriteReview;
