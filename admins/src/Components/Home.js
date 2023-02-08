import React from "react";
import Header from "../Layout/Slider";
import Nav from "../Layout/Nav";

const Home = () => {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
