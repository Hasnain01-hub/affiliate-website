import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-#e91e63ux";
import { toast, ToastContainer } from "react-toastify";
import Sliders from "./Sliders";
import "./Slider.css";
import $ from "jquery";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [deals, setdeals] = useState([]);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  // const { user } = useSelector((state) => state.user);
  let c = 0;
  let d = 0;
  let e = 0;
  let f = 0;
  let g = 0;
  const [category, setCategory] = useState();

  const [loading, setLoading] = useState(true);
  const loaddeals = async () => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/view-deals")
      .then((res) => {
        setdeals(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    loaddeals();

    axios
      .get(process.env.REACT_APP_API + "api/admin/category/get")
      .then((res) => {
        setCategory(res.data);
        setTimeout(() => {
          setLoading(false);
          $(".loader").fadeOut();
        }, 2000);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, []);
  const generatelink = (e, link) => {
    // e.preventDefault();
    // navigator.clipboard.writeText(link).then(function () {
    //   toast.success("Link Copied");
    // });
  };

  return (
    <>
      <div className="loader">
        <HashLoader
          color="#c40316"
          loading={loading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h1>Loading</h1>
      </div>{" "}
      <div className="home_section_bg">
        {/*Categories product area start*/}
        <div className="categories_product_area mb-55">
          <div className="container">
            {/* {user !== null ? (
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
            <br /> */}
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
                          <a href={"/shop/" + cat.name}>
                            <img src={cat.image} alt="" />
                          </a>
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
                scrollSnapType: "x mandatory",
                gap: "15px",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.map((item, i) => {
                return item.category === "Deal of The Day"
                  ? ((c += 1),
                    c <= 5 ? (
                      <div
                        key={item._id}
                        style={{ scrollSnapAlign: "start" }}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <div className="owl-item active">
                          <article className="single_product">
                            <figure>
                              <div className="product_thumb">
                                <a className="primary_img" href="#/">
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
                                  <span
                                    style={{
                                      background: "#e91e63",
                                      color: "white",
                                    }}
                                    className="label_sale"
                                  >
                                    {(
                                      ((item.price - item.discount_price) /
                                        item.discount_price) *
                                      100
                                    ).toFixed(2)}
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="product_content">
                                <div className="product_content_inner">
                                  <h4 className="product_name">
                                    <a href={"/Deal/" + item._id}>
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
                              </div>
                            </figure>
                            <div
                              // onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a
                                href={item.p_link}
                                target="_blank"
                                rel="noreferrer"
                                title="Grab Deal"
                              >
                                Grab Deal
                              </a>
                            </div>
                          </article>
                        </div>
                      </div>
                    ) : null)
                  : null;
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
                scrollSnapType: "x mandatory",
                padding: "30px",
              }}
            >
              {deals.map((item) => {
                return item.category === "Fashion Deals"
                  ? ((d += 1),
                    d <= 5 ? (
                      <div
                        key={item._id}
                        style={{ scrollSnapAlign: "start" }}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <div className="owl-item active">
                          <article className="single_product">
                            <figure>
                              <div className="product_thumb">
                                <a className="primary_img" href="#/">
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
                                  <span
                                    style={{
                                      background: "#e91e63",
                                      color: "white",
                                    }}
                                    className="label_sale"
                                  >
                                    {(
                                      ((item.price - item.discount_price) /
                                        item.discount_price) *
                                      100
                                    ).toFixed(2)}
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="product_content">
                                <div className="product_content_inner">
                                  <h4 className="product_name">
                                    <a href={"/Deal/" + item._id}>
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
                              </div>
                            </figure>
                            <div
                              // onClick={(e) => generatelink(e, item.p_link)}
                              className="add_to_cart"
                            >
                              <a
                                href={item.p_link}
                                target="_blank"
                                rel="noreferrer"
                                title="Grab Deal"
                              >
                                Grab Deal
                              </a>
                            </div>
                          </article>
                        </div>
                      </div>
                    ) : null)
                  : null;
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
                scrollSnapType: "x mandatory",
                overflowY: `hidden`,
                padding: "30px",
              }}
            >
              {deals.map((item) => {
                return item.category === "Best- In- Beauty"
                  ? ((e += 1),
                    e <= 5 ? (
                      <div
                        key={item._id}
                        style={{ scrollSnapAlign: "start" }}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <div className="owl-item active">
                          <article className="single_product">
                            <figure>
                              <div className="product_thumb">
                                <a className="primary_img" href="#/">
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
                                  <span
                                    style={{
                                      background: "#e91e63",
                                      color: "white",
                                    }}
                                    className="label_sale"
                                  >
                                    {(
                                      ((item.price - item.discount_price) /
                                        item.discount_price) *
                                      100
                                    ).toFixed(2)}
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="product_content">
                                <div className="product_content_inner">
                                  <h4 className="product_name">
                                    <a href={"/Deal/" + item._id}>
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
                                  // onClick={(e) => generatelink(e, item.p_link)}
                                  className="add_to_cart"
                                >
                                  <a
                                    href={item.p_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Grab Deal"
                                  >
                                    Grab Deal
                                  </a>
                                </div>
                              </div>
                            </figure>
                          </article>
                        </div>
                      </div>
                    ) : null)
                  : null;
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
              {deals.map((item) => {
                return item.category === "Mobiles& TV"
                  ? ((f += 1),
                    f <= 5 ? (
                      <div
                        key={item._id}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <div className="owl-item active">
                          <article className="single_product">
                            <figure>
                              <div className="product_thumb">
                                <a className="primary_img" href="#/">
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
                                  <span
                                    style={{
                                      background: "#e91e63",
                                      color: "white",
                                    }}
                                    className="label_sale"
                                  >
                                    {(
                                      ((item.price - item.discount_price) /
                                        item.discount_price) *
                                      100
                                    ).toFixed(2)}
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="product_content">
                                <div className="product_content_inner">
                                  <h4 className="product_name">
                                    <a href={"/Deal/" + item._id}>
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
                                  // onClick={(e) => generatelink(e, item.p_link)}
                                  className="add_to_cart"
                                >
                                  <a
                                    href={item.p_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Grab Deal"
                                  >
                                    Grab Deal
                                  </a>
                                </div>
                              </div>
                            </figure>
                          </article>
                        </div>
                      </div>
                    ) : null)
                  : null;
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
              {deals.map((item) => {
                return item.category === "seasonal product"
                  ? ((g += 1),
                    g <= 5 ? (
                      <div
                        key={item._id}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <div className="owl-item active">
                          <article className="single_product">
                            <figure>
                              <div className="product_thumb">
                                <a className="primary_img" href="#/">
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
                                  <span
                                    style={{
                                      background: "#e91e63",
                                      color: "white",
                                    }}
                                    className="label_sale"
                                  >
                                    {(
                                      ((item.price - item.discount_price) /
                                        item.discount_price) *
                                      100
                                    ).toFixed(2)}
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="product_content">
                                <div className="product_content_inner">
                                  <h4 className="product_name">
                                    <a href={"/Deal/" + item._id}>
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
                                  // onClick={(e) => generatelink(e, item.p_link)}
                                  className="add_to_cart"
                                >
                                  <a
                                    href={item.p_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Grab Deal"
                                  >
                                    Grab Deal
                                  </a>
                                </div>
                              </div>
                            </figure>
                          </article>
                        </div>
                      </div>
                    ) : null)
                  : null;
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
