import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { motion } from "framer-motion";

// graphql query
const reviews = gql`
  {
    reviews {
      reviewSummary
      reviewBy {
        username
        attendsUniversity {
          slug
        }
      }
    }
  }
`;

// show revie author
const ReviewBy = ({ reviewBy }) => {
  const [username] = reviewBy;
  console.log(username);
  return (
    <>
      {!username && <small className="font-bold">@Anon</small>}

      {username && <small className="font-bold">@{username.username}</small>}
    </>
  );
};

// show {@Anon tag} if no username available
const ReviewsList = () => {
  // query data
  const { loading, error, data } = useQuery(reviews);

  console.log(data);

  const [fullText, setFullText] = useState(false);

  // show full text
  const showFullText = () => {
    setFullText(true);
  };

  return (
    <div className="container mx-auto mt-6 mb-6 p-5 ">
      <h2 className="text-3xl font-bold text-center my-12  mb-10  md:mb-20 md:text-4xl">
        Recent Reviews
      </h2>
      <div className="grid grid-cols-1 gap-8 justify-center items-center w-full hover:cursor-pointer md:grid-cols-3 ">
        {/* {!error && <h4>error occured 👺</h4>} */}
        {loading && <h3>Loading</h3>}
        {!loading &&
          data?.reviews?.map((review) => (
            <motion.section
              className="flex w-full p-5 rounded-lg  drop-shadow-lg bg-white md:flex-1 "
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex flex-col">
                <div className="flex">
                  <h3 className="text-lg font-bold">{review.reviewSummary}</h3>
                </div>
                <p
                  className={`text-left text-gray-500 text-base ${
                    !fullText ? "line-clamp-4" : "line-clamp-none"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  excepturi quidem. Error reprehenderit tempora culpa dicta
                  voluptatibus provident consequuntur est a architecto iusto
                  illum magni sequi laborum nam ad vitae ea eos earum accusamus,
                  quaerat assumenda commodi saepe? Fugiat quasi beatae quia ut
                  perspiciatis sunt ducimus cupiditate quas voluptatem possimus.
                </p>
                <button
                  type="button"
                  className="text-left text-sm w-28 text-blue-500 inline py-5 font-bold hover:underline"
                  onClick={showFullText}
                >
                  See More
                </button>
                <aside className="flex flex-row justify-start items-center">
                  <span className="bg-gray-100 p-4 rounded-full mr-5"></span>
                  <small>
                    By : <ReviewBy reviewBy={review.reviewBy} />
                  </small>
                </aside>
              </div>
            </motion.section>
          ))}
      </div>
    </div>
  );
};

export default ReviewsList;
