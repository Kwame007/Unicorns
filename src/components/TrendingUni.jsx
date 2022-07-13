import React from "react";
import Card from "./Card";
import img from "../assets/images/asu.jpg";
import img2 from "../assets/images/havard.jpg";
import img3 from "../assets/images/sydney.jpg";
import { LocationMarkerIcon, StarIcon } from "@heroicons/react/solid";

const TrendingUni = () => {
  return (
    <section className="max-w-6xl mx-auto mt-20 mb-10 py-10 ">
      <h2 className="font-bold  container mx-auto p-5 text-3xl text-left md:mb-20 md:text-4xl md:text-center">
        Most Reviewed <br className="md:hidden" />
        Universities 🔥
      </h2>
      <aside className=" grid grid-cols-1 gap-5 md:grid-cols-3 ">
        <Card>
          <div className="p-5">
            <img src={img} alt="" className="w-full h-52 rounded-2xl" />
            <div>
              <h3 className="text-lg font-medium my-5 text-left">
                Arizona State
              </h3>
              <span className=" flex text-sm justify-between items-center">
                <p className="flex justify-center items-center">
                  <LocationMarkerIcon className="h-5 w-5 pr-1" />
                  Arizona, AZ
                </p>
                <p className="flex justify-center items-center">
                  <StarIcon className="h-5 w-5 pr-1" />
                  200 reviews
                </p>
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <img src={img3} alt="" className="w-full h-52 rounded-2xl" />
            <div>
              <h3 className="text-lg font-medium my-5 text-left">
                Sydney College
              </h3>
              <span className=" flex text-sm justify-between items-center">
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 pr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Australia, AU
                </p>
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 pr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>{" "}
                  100 reviews
                </p>
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <img src={img2} alt="" className="w-full h-52 rounded-2xl" />
            <div>
              <h3 className="text-lg font-medium my-5 text-left">
                Havard University
              </h3>
              <span className=" flex text-sm justify-between items-center">
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 pr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Boston, MA
                </p>
                <p className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 pr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>{" "}
                  50 reviews
                </p>
              </span>
            </div>
          </div>
        </Card>
      </aside>
    </section>
  );
};

export default TrendingUni;
