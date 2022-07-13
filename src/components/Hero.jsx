import React from "react";
import Input from "../components/Input";


const Hero = () => {
  return (
    <main className="max-w-full bg-hero-pattern bg-cover bg-center bg-no-repeat h-96 flex justify-center items-center ">
      <div className="px-2 text-white text-center">
        <h1 className="text-4xl leading-7 pb-3 font-bold md:text-5xl md:leading-10">
          Rate universities & courses in ghana
        </h1>
        <h2 className="font-medium leading-5 mb-5 text-gray-100 md:mb-8">
          Your no.1 website for all ghanaian universities and courses reviews...{" "}
        </h2>
        <section className="text-gray-700">
          <div className="w-4/5 mx-auto">
            <label htmlFor="" className="w-full relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 absolute top-4 ml-2 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <Input
                type="text"
                className="pl-10 pr-5 w-full h-12 rounded-2xl md:h-14 placeholder:text-sm focus:outline-none"
                placeholder="Seach for your uni 🏫 or course 📚..."
              />
            </label>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
