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
                  <LocationMarkerIcon className="h-5 w-5 pr-1" />
                  Australia, AU
                </p>
                <p className="flex justify-center items-center">
                  <StarIcon className="h-5 w-5 pr-1" />
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
                  <LocationMarkerIcon className="h-5 w-5 pr-1" />
                  Boston, MA
                </p>
                <p className="flex justify-center items-center">
                  <StarIcon className="h-5 w-5 pr-1" />
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
