import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div class="off_canvars_overlay"></div>
      <div className="Offcanvas_menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="canvas_open canvas4_open">
                <Link to="#/">
                  <i className="ion-navicon" />
                </Link>
              </div>
              <div className="Offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <Link to="#/">
                    <i className="ion-android-close" />
                  </Link>
                </div>
                <div className="antomi_message">
                  <p>Get free shipping – Free 30 day money back guarantee</p>
                </div>
                <div className="header_top_settings text-end">
                  <ul>
                    <li>
                      <Link to="#/">Store Locations</Link>
                    </li>
                    <li>
                      <Link to="#/">Track Your Order</Link>
                    </li>
                    <li>
                      Hotline: <Link to="tel:+0123456789">0123456789 </Link>
                    </li>
                    <li>Quality Guarantee Of Products</li>
                  </ul>
                </div>
                <div id="menu" className="text-start ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <Link to="#/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#/">Shop</Link>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link to="#/">Shop Layouts</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="shop.html">shop</Link>
                            </li>
                            <li>
                              <Link to="shop-fullwidth.html">Full Width</Link>
                            </li>
                            <li>
                              <Link to="shop-fullwidth-list.html">
                                Full Width list
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-right-sidebar.html">
                                Right Sidebar{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-right-sidebar-list.html">
                                {" "}
                                Right Sidebar list
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-list.html">List View</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#/">other Pages</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="cart.html">cart</Link>
                            </li>
                            <li>
                              <Link to="wishlist.html">Wishlist</Link>
                            </li>
                            <li>
                              <Link to="checkout.html">Checkout</Link>
                            </li>
                            <li>
                              <Link to="my-account.html">my account</Link>
                            </li>
                            <li>
                              <Link to="404.html">Error 404</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#/">Product Types</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="product-details.html">
                                product details
                              </Link>
                            </li>
                            <li>
                              <Link to="product-sidebar.html">
                                product sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="product-grouped.html">
                                product grouped
                              </Link>
                            </li>
                            <li>
                              <Link to="variable-product.html">
                                product variable
                              </Link>
                            </li>
                            <li>
                              <Link to="product-countdown.html">
                                product countdown
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#/">blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="blog.html">blog</Link>
                        </li>
                        <li>
                          <Link to="blog-details.html">blog details</Link>
                        </li>
                        <li>
                          <Link to="blog-fullwidth.html">blog fullwidth</Link>
                        </li>
                        <li>
                          <Link to="blog-sidebar.html">blog sidebar</Link>
                        </li>
                        <li>
                          <Link to="blog-no-sidebar.html">blog no sidebar</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#/">pages </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="about.html">About Us</Link>
                        </li>
                        <li>
                          <Link to="faq.html">Frequently Questions</Link>
                        </li>
                        <li>
                          <Link to="privacy-policy.html">privacy policy</Link>
                        </li>
                        <li>
                          <Link to="contact.html">contact</Link>
                        </li>
                        <li>
                          <Link to="login.html">login</Link>
                        </li>
                        <li>
                          <Link to="404.html">Error 404</Link>
                        </li>
                        <li>
                          <Link to="compare.html">compare</Link>
                        </li>
                        <li>
                          <Link to="coming-soon.html">coming soon</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="my-account.html">my account</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="contact.html"> Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="Offcanvas_footer">
                  <span>
                    <Link to="#/">
                      <i className="fa fa-envelope-o" /> demo@example.com
                    </Link>
                  </span>
                  <ul>
                    <li className="facebook">
                      <Link to="#/">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="twitter">
                      <Link to="#/">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li className="pinterest">
                      <Link to="#/">
                        <i className="fa fa-pinterest-p" />
                      </Link>
                    </li>
                    <li className="google-plus">
                      <Link to="#/">
                        <i className="fa fa-google-plus" />
                      </Link>
                    </li>
                    <li className="linkedin">
                      <Link to="#/">
                        <i className="fa fa-linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="main_header header_four m-0">
          <div className="container">
            {/*header top start*/}
            <div className="header_top"></div>
            {/*header top start*/}
            {/*header middel start*/}
            <div className="header_middle header_middle_style4">
              <div className="row align-items-center">
                <div className="column1 col-lg-3 col-md-3 col-4">
                  <div className="logo">
                    <Link to="index-2.html">
                      <img src="/assets/img/logo/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*header middel start*/}

            {/*header middel end*/}
            {/*mini cart*/}
            <div className="mini_cart">
              <div className="cart_close">
                <div className="cart_text">
                  <h3>cart</h3>
                </div>
                <div className="mini_cart_close">
                  <Link to="#/">
                    <i className="ion-android-close" />
                  </Link>
                </div>
              </div>
              <div className="cart_item">
                <div className="cart_img">
                  <Link to="#/">
                    <img src="assets/img/s-product/product.jpg" alt="" />
                  </Link>
                </div>
                <div className="cart_info">
                  <Link to="#/">Primis In Faucibus</Link>
                  <p>
                    Qty: 1 X <span> $60.00 </span>
                  </p>
                </div>
                <div className="cart_remove">
                  <Link to="#/">
                    <i className="ion-android-close" />
                  </Link>
                </div>
              </div>
              <div className="cart_item">
                <div className="cart_img">
                  <Link to="#/">
                    <img src="assets/img/s-product/product2.jpg" alt="" />
                  </Link>
                </div>
                <div className="cart_info">
                  <Link to="#/">Letraset Sheets</Link>
                  <p>
                    Qty: 1 X <span> $60.00 </span>
                  </p>
                </div>
                <div className="cart_remove">
                  <Link to="#/">
                    <i className="ion-android-close" />
                  </Link>
                </div>
              </div>
              <div className="mini_cart_table">
                <div className="cart_total">
                  <span>Sub total:</span>
                  <span className="price">$138.00</span>
                </div>
                <div className="cart_total mt-10">
                  <span>total:</span>
                  <span className="price">$138.00</span>
                </div>
              </div>
              <div className="mini_cart_footer">
                <div className="cart_button">
                  <Link to="cart.html">View cart</Link>
                </div>
              </div>
            </div>
            {/*mini cart end*/}
            {/*header bottom satrt*/}
            <div className="header_bottom">
              <div className="row align-items-center">
                <div className="column2 col-lg-3">
                  <div className="main_menu menu_four menu_position">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">home</Link>
                        </li>
                        <li>
                          <Link to="/Shop">Shop</Link>
                        </li>
                        <li>
                          <Link to="/deals">Deals</Link>
                        </li>

                        {!user && (
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                        )}

                        <li>
                          <Link to="contact.html"> Contact Us</Link>
                        </li>
                        {user && (
                          <>
                            <li>
                              <Link to="/Links">Make-Links</Link>
                            </li>
                            <li onClick={logout}>
                              <Link to="/"> logout</Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="column3 col-lg-6 col-md-6">
                  <div className="header_bigsale h_bigsale_four">
                    <Link to="#/">BIG SALE BLACK FRIDAY</Link>
                  </div>
                </div>
              </div>
            </div>
            {/*header bottom end*/}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
