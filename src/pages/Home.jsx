import React from "react";
import logo from "../logo.svg";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-7xl">Hello Vite + React!</p>
        </header>
      </Layout>
    </>
  );
};

export default Home;
