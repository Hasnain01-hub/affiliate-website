import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user);

  return (
    <>
      <div className="error_page_bg">
        <div className="container">
          <div className="error_section">
            <div className="row">
              <div className="col-12">
                <div className="error_form">
                  <h1>404</h1>
                  <h2>Opps! PAGE NOT BE FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been
                    <br /> removed, name changed or is temporarily unavailable.
                  </p>
                  <Link to="/">Back to home page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
