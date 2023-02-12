import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
export const MakeLink = () => {
  const [link, setlink] = React.useState("");
  const handleSubmit = () => {
    if (link !== "") {
      axios
        .post(
          process.env.REACT_APP_API + "api/createlink/generate-link",
          {
            link: link,
          },
          {
            headers: {
              authtoken: window.localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "Invalid Link") {
            toast.error("Invalid Link");
          } else {
            navigator.clipboard.writeText(res.data).then(function () {
              toast.success("Affiliate Link Copied");
            });
          }
        });
    } else {
      toast.error("You don't have any tag");
    }
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
                <input
                  onChange={(e) => setlink(e.target.value)}
                  placeholder="Search product..."
                  type="text"
                />
                <button type="submit" onClick={handleSubmit}>
                  Make Link Now
                </button>
              </div>
            </div>
          </div>
        </center>
      </div>
      <ToastContainer />
    </>
  );
};
