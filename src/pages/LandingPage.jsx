import React, { useState } from "react";
import Hero from "../components/Hero";
import TrendingUni from "../components/TrendingUni";
import ReviewGuide from "../components/ReviewGuide";
import ReviewsList from "../pages/reviews/ReviewsList";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <TrendingUni />
      <ReviewGuide />

      {/* temporal */}
      <ReviewsList />
    </>
  );
};

export default LandingPage;
