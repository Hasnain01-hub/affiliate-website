import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductsLoader from "./ProductsLoader";
import SinglePageLoading from "./SinglePageLoading";
import "./Slider.css";

const SingleDeal = () => {
  const [deal, setDeal] = useState();

  const [loading, setLoading] = useState(true);

  const [similars, setSimilars] = useState([]);

  const params = useParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/single_deal/" + params.id)
      .then((res) => {
        setDeal(res.data.product);
        setSimilars(res.data.similar);
        setLoading(false);
      });
  }, [params.id]);

  const Copy = (link) => {
    window.location.href = link;
  };

  const generatelink = (e, link) => {
    e.preventDefault();
    window.location.href = link;
  };

  const handleRedirect = (id) => {
    window.location.href = "/Deal/" + id;
  };

  return (
    <>
      {loading === true ? (
        <>
          {}
          <div className="product_details_wrapper mb-45">
            {/*product details start*/}
            <div className="product_details" style={{ height: "40vh" }}>
              <SinglePageLoading />
            </div>
          </div>
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
                        <LazyLoadImage
                          id="zoom1"
                          src={deal.image}
                          data-zoom-image={deal.image}
                          alt="big-1"
                          effect="blur"
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
                        <a href="#/">{deal.name}</a>
                      </h3>

                      <div className="price_box">
                        <span className="current_price">
                          {" "}
                          {(
                            ((deal.price - deal.discount) / deal.price) *
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
                          How to Avail the Offer:
                          <text style={{ fontWeight: "400" }}>
                            &nbsp;&nbsp;Click on 'Grab deal' button. You’ll be
                            redirected to Amazon offer page. Place the order as
                            usual on Amazon.
                          </text>
                          <br />
                        </span>
                        <a href="#/" style={{ color: "red" }}>
                          Please note- Sometimes you may see variation in
                          product price due to “different seller” or “offer
                          ended"
                        </a>
                      </div>
                      <div className="product_meta">
                        <span>
                          Category: <a href="#/">{deal.category}</a>
                        </span>
                      </div>

                      {deal.deal_category !== "" ? (
                        <>
                          <div className="product_meta">
                            <span>
                              Deal Category:{" "}
                              <a href="#/">{deal.deal_category}</a>
                            </span>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </form>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        Copy(deal.link);
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

      {similars.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="shop_area shop_fullwidth">
            <div className="container" style={{ width: "80vw" }}>
              <div className="row">
                <div className="col-12">
                  <center>
                    {" "}
                    <h2>
                      <b>Similar Products</b>
                    </h2>
                    <br />
                  </center>
                  <div className="row no-gutters shop_wrapper wrap">
                    {loading === true ? (
                      <>
                        <ProductsLoader />
                      </>
                    ) : (
                      <>
                        {similars.map((s, i) => (
                          <>
                            <div key={i} className="col-lg-3 col-md-4 col-12 ">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a
                                      className="primary_img"
                                      href={"/Deal/" + s._id}
                                    >
                                      <LazyLoadImage
                                        src={s.image}
                                        alt=""
                                        effect="blur"
                                      />
                                    </a>
                                    <a
                                      className="secondary_img"
                                      href={"/Deal/" + s._id}
                                    >
                                      <LazyLoadImage
                                        src={s.image}
                                        alt=""
                                        effect="blur"
                                      />
                                    </a>
                                    <div className="label_product">
                                      <span className="label_sale">Sale</span>
                                    </div>
                                  </div>
                                  <div className="product_content grid_content">
                                    <div className="product_content_inner">
                                      <h4 className="product_name">
                                        <a
                                          onClick={() => {
                                            handleRedirect(s._id);
                                          }}
                                          href="#/"
                                        >
                                          {s.name}
                                        </a>
                                      </h4>
                                      <div className="price_box">
                                        <span className="old_price">
                                          {s.price}.00 INR
                                        </span>
                                        <span className="current_price">
                                          {s.discount}.00 INR
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      onClick={(e) => generatelink(e, s.link)}
                                      className="add_to_cart"
                                    >
                                      <a href="#/" title="Grab Deal">
                                        Grab Deal
                                      </a>
                                    </div>
                                  </div>
                                </figure>
                              </article>
                            </div>
                          </>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default SingleDeal;
