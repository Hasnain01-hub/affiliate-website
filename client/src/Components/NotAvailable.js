import React from "react";
import { Link } from "react-router-dom";

const NotAvailable = () => {
  return (
    <>
      <div className="error_page_bg">
        <div className="container">
          <div className="error_section">
            <div className="row">
              <div className="col-12">
                <div className="error_form">
                  <h1>OOPS</h1>
                  <h2>
                    You Profile is yet to be verified from backend! If you are
                    verified we will let you know in your mail, Till then you
                    can feel free to use our rest of the System.
                  </h2>
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

export default NotAvailable;
