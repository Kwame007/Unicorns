import React from "react";
import { Layout } from "../components";
import ReviewsList from "./reviews/ReviewsList";

const Home = () => {
  return (
    <>
      <Layout>
        <header className="App-header">
          {/* <p className="text-7xl">testing</p> 
          - update with redux */}
        </header>
        <ReviewsList />
      </Layout>
    </>
  );
};

export default Home;
