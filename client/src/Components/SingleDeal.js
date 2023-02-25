import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SingleDeal = () => {
  const [deal, setDeal] = useState();

  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/single_deal/" + params.id)
      .then((res) => {
        setDeal(res.data);
        setLoading(false);
      });
  }, [params.id]);

  const Copy = (link) => {
    navigator.clipboard.writeText(link).then(function () {
      toast.success("Link Copied");
    });
  };

  return (
    <>
      {loading === true ? (
        <>
          <center>
            <h1 className="p-5">Loading Deal....</h1>
          </center>
        </>
      ) : (
        <>
          <div className="product_details_wrapper mb-45">
            {/*product details start*/}
            <div className="product_details">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="product-details-tab">
                    <div id="img-1" className="zoomWrapper single-zoom">
                      <a href="#/">
                        <img
                          id="zoom1"
                          src={deal.images[0].url}
                          data-zoom-image={deal.images[0].url}
                          alt="big-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6"
                  style={{
                    overflow: "hidden",
                    textOverflow: "inherit",
                    wordWrap: "break-word",
                  }}
                >
                  <div className="product_d_right">
                    <form action="#">
                      <h3>
                        <a href="#/">{deal.p_name}</a>
                      </h3>

                      <div className="price_box">
                        <span className="current_price">
                          {" "}
                          {(
                            ((deal.price - deal.discount_price) /
                              deal.discount_price) *
                            100
                          ).toFixed(2)}
                          % Discount
                        </span>
                      </div>
                      <div className="product_desc">
                        <p>{deal.description} </p>
                      </div>
                      <div className="product_meta">
                        <span>
                          How to Avail the Offer:{" "}
                          <a href="#/">{deal.how_avail}</a>
                        </span>
                      </div>
                      <div className="product_meta">
                        <span>
                          Category: <a href="#/">{deal.category}</a>
                        </span>
                      </div>
                    </form>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        Copy(deal.p_link);
                      }}
                    >
                      Grab Deal
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*product details end*/}
            {/*product info start*/}
            {/*product info end*/}
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default SingleDeal;
