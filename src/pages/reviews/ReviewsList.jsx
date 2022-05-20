import React from "react";
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

  return (
    <div className="container mx-auto mt-6 p-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center my-12">Recent Reviews</h2>
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
                <p className="text-left overflow-auto leading-6 text-gray-400 text-lg py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  vitae eum. Error placeat vel qui magni quia eum odit
                  excepturi! Autem tenetur architecto, ratione quod nostrum
                  explicabo sapiente facere perspiciatis?
                </p>
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
