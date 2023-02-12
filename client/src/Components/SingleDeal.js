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
          <h1>Loading Deal....</h1>
        </>
      ) : (
        <>
          <div className="product_details_wrapper mb-55">
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
                    <div className="single-zoom-thumb">
                      <ul
                        className="s-tab-zoom owl-carousel single-product-active owl-loaded owl-drag"
                        id="gallery_01"
                      >
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-507px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: "1521px",
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.75px", marginRight: "15px" }}
                            >
                              <li>
                                <a
                                  href="#/"
                                  className="elevatezoom-gallery active"
                                  data-update
                                  data-image={deal.images[0].url}
                                  data-zoom-image={deal.images[0].url}
                                >
                                  <img src={deal.images[0].url} alt="zo-th-1" />
                                </a>
                              </li>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
                          <div className="owl-prev">
                            <i className="fa fa-angle-left" />
                          </div>
                          <div className="owl-next">
                            <i className="fa fa-angle-right" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
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
                      Copy Link
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
