import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Deals = () => {
  const [deals, setdeals] = useState([]);

  const [category, setCategory] = useState();

  const [loading, setLoading] = useState(true);
  const loaddeals = async () => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/view-deals")
      .then((res) => {
        setdeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loaddeals();

    axios
      .get(process.env.REACT_APP_API + "api/admin/category/get")
      .then((res) => {
        setCategory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, []);

  return (
    <>
      <div className="home_section_bg">
        <div className="product_area deals_product">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2>Deals Of The Month</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {deals.map((item) => {
                return (
                  <div key={item._id} className="col-lg-3 col-md-4 col-sm-6">
                    <div className="owl-item active">
                      <article className="single_product">
                        <figure>
                          <div className="product_thumb">
                            <a
                              className="primary_img"
                              href="product-countdown.html"
                            >
                              <img
                                style={{
                                  height: "200px",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                                src={item.images[0]["url"]}
                                alt=""
                              />
                            </a>
                            <a className="secondary_img" href="#/">
                              <img
                                style={{
                                  height: "200px",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                                src={item.images[0]["url"]}
                                alt=""
                              />
                            </a>
                            <div className="label_product">
                              <span className="label_sale">Sale</span>
                            </div>
                          </div>
                          <div className="product_content">
                            <div className="product_content_inner">
                              <h4 className="product_name">
                                <a href="product-countdown.html">
                                  {item.p_name}
                                </a>
                              </h4>
                              <div className="countdown_text">
                                <p>
                                  <span>Hurry Up!</span> Offers ends in:{" "}
                                </p>
                              </div>
                              <div className="product_timing">
                                {/* <div data-countdown="2023/02/15">
                                  <div className="countdown_area">
                                    <div className="single_countdown">
                                      <div className="countdown_number">08</div>
                                      <div className="countdown_title">
                                        days
                                      </div>
                                    </div>
                                    <div className="single_countdown">
                                      <div className="countdown_number">00</div>
                                      <div className="countdown_title">
                                        hours
                                      </div>
                                    </div>
                                    <div className="single_countdown">
                                      <div className="countdown_number">55</div>
                                      <div className="countdown_title">
                                        mins
                                      </div>
                                    </div>
                                    <div className="single_countdown">
                                      <div className="countdown_number">24</div>
                                      <div className="countdown_title">
                                        secs
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                <p>{moment(item.end_date).format("LLL")}</p>
                              </div>
                            </div>
                            <div className="add_to_cart">
                              <a href="cart.html" title="Add to cart">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
