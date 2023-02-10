import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
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
        {/*Categories product area start*/}
        <div className="categories_product_area mb-55">
          <div className="container">
            <div className="categories_product_inner">
              {loading === false ? (
                <>
                  {category.map((cat, i) => (
                    <>
                      <div
                        className="single_categories_product"
                        style={{ height: "100px" }}
                      >
                        <div className="categories_product_content">
                          <h4>
                            <Link to={"/shop/" + cat.name}> {cat.name}</Link>
                          </h4>
                          <p>{cat.number_of_product} Products Available</p>
                        </div>
                        <div className="categories_product_thumb">
                          <a href="shop.html">
                            <img src={cat.image} alt="" />
                          </a>
                        </div>
                      </div>
                    </>
                  ))}
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
                    <h2>Deals Of The Month</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {deals.slice(0, 5).map((item) => {
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

              {/* <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="owl-item active">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a
                          className="primary_img"
                          href="product-countdown.html"
                        >
                          <img src="assets/img/product/product5.jpg" alt="" />
                        </a>
                        <a
                          className="secondary_img"
                          href="product-countdown.html"
                        >
                          <img src="assets/img/product/product6.jpg" alt="" />
                        </a>
                        <div className="label_product">
                          <span className="label_sale">Sale</span>
                        </div>
                        <div className="action_links">
                          <ul>
                            <li className="wishlist">
                              <a
                                href="wishlist.html"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-tippy="Add to Wishlist"
                              >
                                <i className="ion-android-favorite-outline" />
                              </a>
                            </li>
                            <li className="compare">
                              <a
                                href="#/"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-tippy="Add to Compare"
                              >
                                <i className="ion-ios-settings-strong" />
                              </a>
                            </li>
                            <li className="quick_button">
                              <a
                                href="#/"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-bs-toggle="modal"
                                data-bs-target="#modal_box"
                                data-tippy="quick view"
                              >
                                <i className="ion-ios-search-strong" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_content">
                        <div className="product_content_inner">
                          <h4 className="product_name">
                            <a href="product-countdown.html">
                              Natus erro at congue massa commodo sit Natus erro
                            </a>
                          </h4>
                          <div className="price_box">
                            <span className="old_price">$80.00</span>
                            <span className="current_price">$70.00</span>
                          </div>
                          <div className="countdown_text">
                            <p>
                              <span>Hurry Up!</span> Offers ends in:{" "}
                            </p>
                          </div>
                          <div className="product_timing">
                            <div data-countdown="2023/02/15">
                              <div className="countdown_area">
                                <div className="single_countdown">
                                  <div className="countdown_number">08</div>
                                  <div className="countdown_title">days</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">00</div>
                                  <div className="countdown_title">hours</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">55</div>
                                  <div className="countdown_title">mins</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">24</div>
                                  <div className="countdown_title">secs</div>
                                </div>
                              </div>
                            </div>
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

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="owl-item active">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a
                          className="primary_img"
                          href="product-countdown.html"
                        >
                          <img src="assets/img/product/product5.jpg" alt="" />
                        </a>
                        <a
                          className="secondary_img"
                          href="product-countdown.html"
                        >
                          <img src="assets/img/product/product6.jpg" alt="" />
                        </a>
                        <div className="label_product">
                          <span className="label_sale">Sale</span>
                        </div>
                        <div className="action_links">
                          <ul>
                            <li className="wishlist">
                              <a
                                href="wishlist.html"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-tippy="Add to Wishlist"
                              >
                                <i className="ion-android-favorite-outline" />
                              </a>
                            </li>
                            <li className="compare">
                              <a
                                href="#/"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-tippy="Add to Compare"
                              >
                                <i className="ion-ios-settings-strong" />
                              </a>
                            </li>
                            <li className="quick_button">
                              <a
                                href="#/"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-bs-toggle="modal"
                                data-bs-target="#modal_box"
                                data-tippy="quick view"
                              >
                                <i className="ion-ios-search-strong" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_content">
                        <div className="product_content_inner">
                          <h4 className="product_name">
                            <a href="product-countdown.html">
                              Natus erro at congue massa commodo sit Natus erro
                            </a>
                          </h4>
                          <div className="price_box">
                            <span className="old_price">$80.00</span>
                            <span className="current_price">$70.00</span>
                          </div>
                          <div className="countdown_text">
                            <p>
                              <span>Hurry Up!</span> Offers ends in:{" "}
                            </p>
                          </div>
                          <div className="product_timing">
                            <div data-countdown="2023/02/15">
                              <div className="countdown_area">
                                <div className="single_countdown">
                                  <div className="countdown_number">08</div>
                                  <div className="countdown_title">days</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">00</div>
                                  <div className="countdown_title">hours</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">55</div>
                                  <div className="countdown_title">mins</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">24</div>
                                  <div className="countdown_title">secs</div>
                                </div>
                              </div>
                            </div>
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

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="owl-item active">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a
                          className="primary_img"
                          href="product-countdown.html"
                        >
                          <img src="assets/img/product/product5.jpg" alt="" />
                        </a>
                        <a
                          className="secondary_img"
                          href="product-countdown.html"
                        >
                          <img src="assets/img/product/product6.jpg" alt="" />
                        </a>
                        <div className="label_product">
                          <span className="label_sale">Sale</span>
                        </div>
                        <div className="action_links">
                          <ul>
                            <li className="wishlist">
                              <a
                                href="wishlist.html"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-tippy="Add to Wishlist"
                              >
                                <i className="ion-android-favorite-outline" />
                              </a>
                            </li>
                            <li className="compare">
                              <a
                                href="#/"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-tippy="Add to Compare"
                              >
                                <i className="ion-ios-settings-strong" />
                              </a>
                            </li>
                            <li className="quick_button">
                              <a
                                href="#/"
                                data-tippy-placement="top"
                                data-tippy-arrow="true"
                                data-tippy-inertia="true"
                                data-bs-toggle="modal"
                                data-bs-target="#modal_box"
                                data-tippy="quick view"
                              >
                                <i className="ion-ios-search-strong" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_content">
                        <div className="product_content_inner">
                          <h4 className="product_name">
                            <a href="product-countdown.html">
                              Natus erro at congue massa commodo sit Natus erro
                            </a>
                          </h4>
                          <div className="price_box">
                            <span className="old_price">$80.00</span>
                            <span className="current_price">$70.00</span>
                          </div>
                          <div className="countdown_text">
                            <p>
                              <span>Hurry Up!</span> Offers ends in:{" "}
                            </p>
                          </div>
                          <div className="product_timing">
                            <div data-countdown="2023/02/15">
                              <div className="countdown_area">
                                <div className="single_countdown">
                                  <div className="countdown_number">08</div>
                                  <div className="countdown_title">days</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">00</div>
                                  <div className="countdown_title">hours</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">55</div>
                                  <div className="countdown_title">mins</div>
                                </div>
                                <div className="single_countdown">
                                  <div className="countdown_number">24</div>
                                  <div className="countdown_title">secs</div>
                                </div>
                              </div>
                            </div>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
