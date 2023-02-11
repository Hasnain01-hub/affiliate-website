import React from "react";

export const MakeLink = () => {
  const handleSubmit = () => {
    // logic here
  };

  return (
    <>
      <div className="container p-4">
        <center>
          <div className="col-lg-6 col-md-12">
            <h3>Make Your Own Affiliate Link NOW</h3>
            <p>
              Just copy and paste the amazon product link of which you want the
              affiliate for and paste it here
            </p>
            <div className="search_container">
              <div className="search_box">
                <input placeholder="Search product..." type="text" />
                <button type="submit" onClick={handleSubmit}>
                  Make Link Now
                </button>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
