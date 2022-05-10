import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Contact, Home, WriteReview, WriteCourseReview, WriteUniReview, } from '../pages';

export default function Routing() {

    return (
        <>
            <Routes path='/'>
                <Route index element={<Home />} />

                <Route path='/reviews'>
                    //Put reviews route here: To display list of reviews
        
                    
                    <Route path='write-review' element={<WriteReview /> } />
                    <Route path='write-uni-review' element={<WriteUniReview /> } />
                    <Route path='write-course-review' element={<WriteCourseReview /> } />
                    
                </Route>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </>
    )
}

