import React from "react";
import { useQuery, gql } from "@apollo/client";

// graphql query
const reviews = gql`
  {
    universities {
      id
      name
      isApproved
      slug
      description
    }
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

const ReviewsList = () => {
  // query data
  const { loading, error, data } = useQuery(reviews);

  console.log(data);

  return (
    <div className="container mx-auto mt-6 p-5 flex flex-col justify-center md:flex-row md:flex-wrap">
      {/* {!loading &&
        data?.rates.map(({ currency, rate }) => (
          <div className="p-5 shadow-md flex-1">
            <p className="text-xl">
              {currency} : {rate}
            </p>
          </div>
        ))} */}
    </div>
  );
};

export default ReviewsList;
