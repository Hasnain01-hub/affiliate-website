import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Sliders from "./Sliders";

const Home = () => {
  const [deals, setdeals] = useState([]);

  const { user } = useSelector((state) => state.user);

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
  const generatelink = (e, link) => {
    e.preventDefault();

    navigator.clipboard.writeText(link).then(function () {
      toast.success("Link Copied");
    });
  };

  return (
    <>
      {console.log(deals)}
      <div className="home_section_bg">
        {/*Categories product area start*/}
        <div className="categories_product_area mb-55">
          <div className="container">
            {user !== null ? (
              <>
                {user.profit === null ? (
                  <>
                    <h3>Your Total Profits Till Now : 0.00</h3>
                  </>
                ) : (
                  <>
                    <h3>Your Total Profits Till Now : INR {user.profit}.00</h3>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
            <br />
            <Sliders />

            <div className="categories_product_inner">
              {loading === false ? (
                <>
                  {category.map((cat, i) => {
                    return (
                      <div
                        className="single_categories_product"
                        style={{ height: "100px" }}
                      >
                        <div className="categories_product_thumb">
                          <Link to={"/shop/" + cat.name}>
                            <img src={cat.image} alt="" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {/*Categories product area end*/}
        {/*product area start*/}
        <div className="product_area deals_product">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2>DEAL OF THE DAY</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                flexWrap: "nowrap",
                overflowX: "auto",
                gap: "15px",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.slice(0, 5).map((item) => {
                return item.category === "Deal of The Day" ? (
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
                            <div
                              onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a href="" title="Copy Link">
                                Copy Link
                              </a>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2>FASHION DEALS</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                flexWrap: "nowrap",
                overflowX: "auto",
                gap: "15px",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.slice(0, 5).map((item) => {
                return item.category === "Fashion Deals" ? (
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
                            <div
                              onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a href="" title="Copy Link">
                                Copy Link
                              </a>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2>BEST-IN-BEAUTY</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                flexWrap: "nowrap",
                overflowX: "auto",
                gap: "15px",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.slice(0, 5).map((item) => {
                return item.category === "Best- In- Beauty" ? (
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
                            <div
                              onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a href="" title="Copy Link">
                                Copy Link
                              </a>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2>MOBILES & TV</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                flexWrap: "nowrap",
                overflowX: "auto",
                gap: "15px",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.slice(0, 5).map((item) => {
                return item.category === "Mobiles& TV" ? (
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
                            <div
                              onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a href="" title="Copy Link">
                                Copy Link
                              </a>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2>SEASONAL PRODUCT</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                flexWrap: "nowrap",
                overflowX: "auto",
                gap: "15px",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.slice(0, 5).map((item) => {
                return item.category === "Seasonal Product" ? (
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
                            <div
                              onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a href="" title="Copy Link">
                                Copy Link
                              </a>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
