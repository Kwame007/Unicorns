import React from "react";
import { Layout } from "../../components";

const WriteReview = () => {
  return (
    <>
      <Layout>
        <h1> Write your reviews here </h1>
        <div className="flex flex-row justify-around">
            <select onSelect="">
                <option value="">Default University</option>
                <option value="UNI">University</option>
            </select>
            <select>
                <option>Default Course</option>
                <option value="">Course 101</option>
            </select>
        </div>
      </Layout>
    </>
  );
};

export default WriteReview;
