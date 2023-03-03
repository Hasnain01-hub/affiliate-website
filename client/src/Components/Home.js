import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-#e91e63ux";
import { toast, ToastContainer } from "react-toastify";
import Sliders from "./Sliders";
import "./Slider.css";
import Categories from "./Categories";
import ProductsLoader from "./ProductsLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { HashLoader } from "react-spinners";

const Home = () => {
  const [deals, setdeals] = useState([]);

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
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, []);

  return (
    <>
      {/* <div className="loader">
        <HashLoader
          color="#ff3130"
          loading={loading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h1>Loading</h1>
      </div>{" "} */}
      <div className="home_section_bg">
        {/*Categories product area start*/}
        <div className="categories_product_area mb-45">
          <div className="container">
            <Sliders />
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
                            <LazyLoadImage
                              alt={cat.image}
                              effect="blur"
                              src={cat.image}
                            />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <Categories />
                </>
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
                    <h2 className="h2">
                      DEAL OF THE DAY
                      <a href={"/Deals/Deal of The Day"}>
                        <span>View All</span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {loading === true ? (
              <>
                <ProductsLoader />
              </>
            ) : (
              <>
                <div
                  className="row"
                  style={{
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    gap: "15px",
                    overflowY: `hidden`,
                    padding: "10px",
                  }}
                >
                  {deals.map((item, i) => {
                    return item.deal_category === "Deal of The Day"
                      ? ((c += 1),
                        c <= 9 ? (
                          <div
                            key={item._id}
                            style={{ scrollSnapAlign: "start" }}
                            className="col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="owl-item active">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a
                                      className="primary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <a
                                      className="secondary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <div className="label_product">
                                      <span
                                        style={{
                                          background: "rgb(255 49 48)",
                                          color: "white",
                                        }}
                                        className="label_sale"
                                      >
                                        {(
                                          ((item.price - item.discount) /
                                            item.price) *
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
                                          {item.name}
                                        </a>
                                      </h4>

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
                                        <p>
                                          <del>Rs{item.price}</del>&nbsp;&nbsp;
                                          <b>Rs{item.discount}</b>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Grab Deal"
                                >
                                  <div
                                    // onClick={(e) => generatelink(e, item.link)}
                                    className="add_to_cart"
                                  >
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      title="Grab Deal"
                                    >
                                      {" "}
                                      Grab Deal
                                    </a>
                                  </div>
                                </a>
                              </article>
                            </div>
                          </div>
                        ) : null)
                      : null;
                  })}
                </div>
              </>
            )}

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2 className="h2">
                      FASHION DEALS{" "}
                      <span>
                        <a href={"/Deals/Fashion Deals"}> View All</a>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {loading === true ? (
              <>
                <ProductsLoader />
              </>
            ) : (
              <>
                <div
                  className="row"
                  style={{
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    gap: "15px",
                    overflowY: `hidden`,
                    scrollSnapType: "x mandatory",
                    padding: "10px",
                  }}
                >
                  {deals.map((item) => {
                    return item.deal_category === "Fashion Deals"
                      ? ((d += 1),
                        d <= 9 ? (
                          <div
                            key={item._id}
                            style={{ scrollSnapAlign: "start" }}
                            className="col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="owl-item active">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a
                                      className="primary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <a
                                      className="secondary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <div className="label_product">
                                      <span
                                        style={{
                                          background: "rgb(255 49 48)",
                                          color: "white",
                                        }}
                                        className="label_sale"
                                      >
                                        {(
                                          ((item.price - item.discount) /
                                            item.price) *
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
                                          {item.name}
                                        </a>
                                      </h4>

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
                                        <p>
                                          <del>Rs{item.price}</del>&nbsp;&nbsp;
                                          <b>Rs{item.discount}</b>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Grab Deal"
                                >
                                  <div
                                    // onClick={(e) => generatelink(e, item.link)}
                                    className="add_to_cart"
                                  >
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      title="Grab Deal"
                                    >
                                      {" "}
                                      Grab Deal
                                    </a>
                                  </div>
                                </a>
                              </article>
                            </div>
                          </div>
                        ) : null)
                      : null;
                  })}
                </div>
              </>
            )}

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2 className="h2">
                      BEST-IN-BEAUTY
                      <a href={"/Deals/Best-In-Beauty"}>
                        <span>View All</span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {loading === true ? (
              <>
                <ProductsLoader />
              </>
            ) : (
              <>
                <div
                  className="row"
                  style={{
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    gap: "15px",
                    scrollSnapType: "x mandatory",
                    overflowY: `hidden`,
                    padding: "10px",
                  }}
                >
                  {deals.map((item) => {
                    return item.deal_category === "Best-In-Beauty"
                      ? ((e += 1),
                        e <= 9 ? (
                          <div
                            key={item._id}
                            style={{ scrollSnapAlign: "start" }}
                            className="col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="owl-item active">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a
                                      className="primary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <a
                                      className="secondary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <div className="label_product">
                                      <span
                                        style={{
                                          background: "rgb(255 49 48)",
                                          color: "white",
                                        }}
                                        className="label_sale"
                                      >
                                        {(
                                          ((item.price - item.discount) /
                                            item.price) *
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
                                          {item.name}
                                        </a>
                                      </h4>

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
                                        <p>
                                          <del>Rs{item.price}</del>&nbsp;&nbsp;
                                          <b>Rs{item.discount}</b>
                                        </p>
                                      </div>
                                    </div>

                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      title="Grab Deal"
                                    >
                                      <div
                                        // onClick={(e) => generatelink(e, item.link)}
                                        className="add_to_cart"
                                      >
                                        <a
                                          href={item.link}
                                          target="_blank"
                                          rel="noreferrer"
                                          title="Grab Deal"
                                        >
                                          {" "}
                                          Grab Deal
                                        </a>
                                      </div>
                                    </a>
                                  </div>
                                </figure>
                              </article>
                            </div>
                          </div>
                        ) : null)
                      : null;
                  })}
                </div>
              </>
            )}

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2 className="h2">
                      MOBILES & TV{" "}
                      <a href={"/Deals/Mobiles& TV"}>
                        <span>View All</span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {loading === true ? (
              <>
                <ProductsLoader />
              </>
            ) : (
              <>
                {" "}
                <div
                  className="row"
                  style={{
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    gap: "15px",
                    overflowY: `hidden`,
                    padding: "10px",
                  }}
                >
                  {deals.map((item) => {
                    return item.deal_category === "Mobiles& TV"
                      ? ((f += 1),
                        f <= 9 ? (
                          <div
                            key={item._id}
                            className="col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="owl-item active">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a
                                      className="primary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <a
                                      className="secondary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <div className="label_product">
                                      <span
                                        style={{
                                          background: "rgb(255 49 48)",
                                          color: "white",
                                        }}
                                        className="label_sale"
                                      >
                                        {(
                                          ((item.price - item.discount) /
                                            item.price) *
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
                                          {item.name}
                                        </a>
                                      </h4>

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
                                        <p>
                                          <del>Rs{item.price}</del>&nbsp;&nbsp;
                                          <b>Rs{item.discount}</b>
                                        </p>
                                      </div>
                                    </div>
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      title="Grab Deal"
                                    >
                                      <div
                                        // onClick={(e) => generatelink(e, item.link)}
                                        className="add_to_cart"
                                      >
                                        <a
                                          href={item.link}
                                          target="_blank"
                                          rel="noreferrer"
                                          title="Grab Deal"
                                        >
                                          {" "}
                                          Grab Deal
                                        </a>
                                      </div>
                                    </a>
                                  </div>
                                </figure>
                              </article>
                            </div>
                          </div>
                        ) : null)
                      : null;
                  })}
                </div>
              </>
            )}

            <div className="row">
              <div className="col-12">
                <div className="product_header">
                  <div className="section_title">
                    <h2 className="h2">
                      SEASONAL PRODUCT{" "}
                      <a href={"/Deals/seasonal product"}>
                        <span>View All</span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {loading === true ? (
              <>
                <ProductsLoader />
              </>
            ) : (
              <>
                <div
                  className="row"
                  style={{
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    gap: "15px",
                    overflowY: `hidden`,
                    padding: "10px",
                  }}
                >
                  {deals.map((item) => {
                    return item.deal_category === "seasonal product"
                      ? ((g += 1),
                        g <= 9 ? (
                          <div
                            key={item._id}
                            className="col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="owl-item active">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a
                                      className="primary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <a
                                      className="secondary_img"
                                      href={"/Deal/" + item._id}
                                    >
                                      <LazyLoadImage
                                        alt={item.image}
                                        effect="blur"
                                        src={item.image}
                                        className="prod_img"
                                      />
                                    </a>
                                    <div className="label_product">
                                      <span
                                        style={{
                                          background: "rgb(255 49 48)",
                                          color: "white",
                                        }}
                                        className="label_sale"
                                      >
                                        {(
                                          ((item.price - item.discount) /
                                            item.price) *
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
                                          {item.name}
                                        </a>
                                      </h4>

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
                                        <p>
                                          <del>Rs{item.price}</del>&nbsp;&nbsp;
                                          <b>Rs{item.discount}</b>
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      // onClick={(e) => generatelink(e, item.link)}
                                      className="add_to_cart"
                                    >
                                      <a
                                        href={item.link}
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
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
