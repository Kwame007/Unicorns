import React from "react";
import { Layout } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_UNICORNS } from "../../graphql/queries";
import StepIndicator from "../../components/StepIndicator";

const WriteReview = () => {

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
        <h1> Write your reviews here </h1>
        <div className="flex flex-row justify-around">

            <select value={uni} onChange={ (e) => (setUni(e.target.value)) }>
                <option value="">Select University</option>
                { 
                    uniData && ( uniData.map( ({name, slug}, index) => ( <option key={index} value={slug}>{name}</option>) ) )
                }
            </select>
            <select value={course} onChange={ (e) => (setCourse(e.target.value)) }>
                <option>Select Course</option>
                {
                    uni
                    ?(
                        courseData.filter((item) => ( uni === item.courseAt.slug) ).map( ({courseTitle, courseCode}, index) => (<option key={index} value={courseCode}>{courseTitle}</option>) )
                    )
                    :(
                        courseData.map( ({courseCode, courseTitle}, index) => (
                            <option key={index} value={courseCode}>{courseTitle}</option>
                        ))
                    )
                }
            </select>

        </div>
        
        <div className="mt-12">
            <StepIndicator />
        </div>

      </Layout>
    </>
  );
};

export default WriteReview;
