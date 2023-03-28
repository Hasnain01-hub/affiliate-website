import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import Box from "./Box";

export const MakeLink = () => {
  const { user } = useSelector((state) => state.user);
  const [link, setlink] = React.useState("");

  const [amz, setAmz] = useState(null);

  const [dec, setDec] = useState();

  const handleSubmit = () => {
    if (link !== "") {
      if (user && user.tag !== "") {
        axios
          .post(
            process.env.REACT_APP_API + "api/createlink/generate-link",
            {
              link: link,
              tag: user.tag,
            },
            {
              headers: {
                authtoken: window.localStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            if (res.data === "Invalid Link") {
              toast.error("Invalid Link");
              setAmz(null);
            } else {
              navigator.clipboard
                .writeText(
                  "https://lamefame.in/link/" + base64_encode(res.data)
                )
                .then(function () {
                  toast.success("Affiliate Link Copied");
                  setlink("");
                  setAmz(base64_encode(res.data));
                  setDec(base64_decode(base64_encode(res.data)));
                });
            }
          })
          .catch((err) => {
            if (err.response.status === 403)
              return toast.error("User not logined!");

            if (err.response.status === 404) {
              toast.error("Invalid URL");
            }
          });
      } else {
        toast.error("You don't have any tag");
      }
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
                  value={link}
                  onChange={(e) => setlink(e.target.value)}
                  placeholder="Search product..."
                  type="text"
                />
                <button type="submit" onClick={handleSubmit}>
                  Make Link Now
                </button>
              </div>
            </div>
            <br />
            {amz !== null ? (
              <>
                <Box link={amz} />
              </>
            ) : (
              <></>
            )}
          </div>
        </center>
      </div>
      <ToastContainer />
    </>
  );
};
