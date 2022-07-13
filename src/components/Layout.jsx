import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TrendingUni from "./TrendingUni";
import ReviewGuide from "./ReviewGuide";
import ReviewsList from "../pages/reviews/ReviewsList";

//page layout order
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      {children}
      <Hero />
      <TrendingUni />
      <ReviewGuide />
      <ReviewsList />
      <Footer />
    </div>
  );
};

export default Layout;
