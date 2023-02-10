import React from "react";
import { useSelector } from "react-redux";
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
                <a href="#/">
                  <i className="ion-navicon" />
                </a>
              </div>
              <div className="Offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <a href="#/">
                    <i className="ion-android-close" />
                  </a>
                </div>
                <div className="antomi_message">
                  <p>Get free shipping – Free 30 day money back guarantee</p>
                </div>
                <div className="header_top_settings text-end">
                  <ul>
                    <li>
                      <a href="#/">Store Locations</a>
                    </li>
                    <li>
                      <a href="#/">Track Your Order</a>
                    </li>
                    <li>
                      Hotline: <a href="tel:+0123456789">0123456789 </a>
                    </li>
                    <li>Quality Guarantee Of Products</li>
                  </ul>
                </div>
                <div id="menu" className="text-start ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <a href="#/">Home</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#/">Shop</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#/">Shop Layouts</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop.html">shop</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth.html">Full Width</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-list.html">
                                Full Width list
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar-list.html">
                                {" "}
                                Right Sidebar list
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">List View</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#/">other Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="my-account.html">my account</a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#/">Product Types</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product-details.html">product details</a>
                            </li>
                            <li>
                              <a href="product-sidebar.html">product sidebar</a>
                            </li>
                            <li>
                              <a href="product-grouped.html">product grouped</a>
                            </li>
                            <li>
                              <a href="variable-product.html">
                                product variable
                              </a>
                            </li>
                            <li>
                              <a href="product-countdown.html">
                                product countdown
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#/">blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                        <li>
                          <a href="blog-fullwidth.html">blog fullwidth</a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html">blog sidebar</a>
                        </li>
                        <li>
                          <a href="blog-no-sidebar.html">blog no sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#/">pages </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="faq.html">Frequently Questions</a>
                        </li>
                        <li>
                          <a href="privacy-policy.html">privacy policy</a>
                        </li>
                        <li>
                          <a href="contact.html">contact</a>
                        </li>
                        <li>
                          <a href="login.html">login</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="compare.html">compare</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">coming soon</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="my-account.html">my account</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="contact.html"> Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="Offcanvas_footer">
                  <span>
                    <a href="#/">
                      <i className="fa fa-envelope-o" /> demo@example.com
                    </a>
                  </span>
                  <ul>
                    <li className="facebook">
                      <a href="#/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="#/">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#/">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#/">
                        <i className="fa fa-linkedin" />
                      </a>
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
                    <a href="index-2.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
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
                  <a href="#/">
                    <i className="ion-android-close" />
                  </a>
                </div>
              </div>
              <div className="cart_item">
                <div className="cart_img">
                  <a href="#/">
                    <img src="assets/img/s-product/product.jpg" alt="" />
                  </a>
                </div>
                <div className="cart_info">
                  <a href="#/">Primis In Faucibus</a>
                  <p>
                    Qty: 1 X <span> $60.00 </span>
                  </p>
                </div>
                <div className="cart_remove">
                  <a href="#/">
                    <i className="ion-android-close" />
                  </a>
                </div>
              </div>
              <div className="cart_item">
                <div className="cart_img">
                  <a href="#/">
                    <img src="assets/img/s-product/product2.jpg" alt="" />
                  </a>
                </div>
                <div className="cart_info">
                  <a href="#/">Letraset Sheets</a>
                  <p>
                    Qty: 1 X <span> $60.00 </span>
                  </p>
                </div>
                <div className="cart_remove">
                  <a href="#/">
                    <i className="ion-android-close" />
                  </a>
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
                  <a href="cart.html">View cart</a>
                </div>
                <div className="cart_button">
                  <a className="active" href="checkout.html">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
            {/*mini cart end*/}
            {/*header bottom satrt*/}
            <div className="header_bottom">
              <div className="row align-items-center">
                <div className="column1 col-lg-3 col-md-6">
                  <div className="categories_menu categories_four">
                    <div className="categories_title">
                      <h2 className="categori_toggle">ALL CATEGORIES</h2>
                    </div>
                    <div className="categories_menu_toggle">
                      <ul>
                        <li className="menu_item_children">
                          <a href="#/">
                            Brake Parts <i className="fa fa-angle-right" />
                          </a>
                          <ul className="categories_mega_menu">
                            <li className="menu_item_children">
                              <a href="#/">Dresses</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Sweater</a>
                                </li>
                                <li>
                                  <a href="#/">Evening</a>
                                </li>
                                <li>
                                  <a href="#/">Day</a>
                                </li>
                                <li>
                                  <a href="#/">Sports</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">Handbags</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Shoulder</a>
                                </li>
                                <li>
                                  <a href="#/">Satchels</a>
                                </li>
                                <li>
                                  <a href="#/">kids</a>
                                </li>
                                <li>
                                  <a href="#/">coats</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">shoes</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Ankle Boots</a>
                                </li>
                                <li>
                                  <a href="#/">Clog sandals </a>
                                </li>
                                <li>
                                  <a href="#/">run</a>
                                </li>
                                <li>
                                  <a href="#/">Books</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">Clothing</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Coats Jackets </a>
                                </li>
                                <li>
                                  <a href="#/">Raincoats</a>
                                </li>
                                <li>
                                  <a href="#/">Jackets</a>
                                </li>
                                <li>
                                  <a href="#/">T-shirts</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu_item_children">
                          <a href="#/">
                            {" "}
                            Wheels &amp; Tires{" "}
                            <i className="fa fa-angle-right" />
                          </a>
                          <ul className="categories_mega_menu column_3">
                            <li className="menu_item_children">
                              <a href="#/">Chair</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Dining room</a>
                                </li>
                                <li>
                                  <a href="#/">bedroom</a>
                                </li>
                                <li>
                                  <a href="#/"> Home &amp; Office</a>
                                </li>
                                <li>
                                  <a href="#/">living room</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">Lighting</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Ceiling Lighting</a>
                                </li>
                                <li>
                                  <a href="#/">Wall Lighting</a>
                                </li>
                                <li>
                                  <a href="#/">Outdoor Lighting</a>
                                </li>
                                <li>
                                  <a href="#/">Smart Lighting</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">Sofa</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Fabric Sofas</a>
                                </li>
                                <li>
                                  <a href="#/">Leather Sofas</a>
                                </li>
                                <li>
                                  <a href="#/">Corner Sofas</a>
                                </li>
                                <li>
                                  <a href="#/">Sofa Beds</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu_item_children">
                          <a href="#/">
                            {" "}
                            Furnitured &amp; Decor{" "}
                            <i className="fa fa-angle-right" />
                          </a>
                          <ul className="categories_mega_menu column_2">
                            <li className="menu_item_children">
                              <a href="#/">Brake Tools</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Driveshafts</a>
                                </li>
                                <li>
                                  <a href="#/">Spools</a>
                                </li>
                                <li>
                                  <a href="#/">Diesel </a>
                                </li>
                                <li>
                                  <a href="#/">Gasoline</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">Emergency Brake</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Dolls for Girls</a>
                                </li>
                                <li>
                                  <a href="#/">Girls' Learning Toys</a>
                                </li>
                                <li>
                                  <a href="#/">Arts and Crafts for Girls</a>
                                </li>
                                <li>
                                  <a href="#/">Video Games for Girls</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu_item_children">
                          <a href="#/">
                            {" "}
                            Turbo System <i className="fa fa-angle-right" />
                          </a>
                          <ul className="categories_mega_menu column_2">
                            <li className="menu_item_children">
                              <a href="#/">Check Trousers</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Building</a>
                                </li>
                                <li>
                                  <a href="#/">Electronics</a>
                                </li>
                                <li>
                                  <a href="#/">action figures </a>
                                </li>
                                <li>
                                  <a href="#/">specialty &amp; boutique toy</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu_item_children">
                              <a href="#/">Calculators</a>
                              <ul className="categorie_sub_menu">
                                <li>
                                  <a href="#/">Dolls for Girls</a>
                                </li>
                                <li>
                                  <a href="#/">Girls' Learning Toys</a>
                                </li>
                                <li>
                                  <a href="#/">Arts and Crafts for Girls</a>
                                </li>
                                <li>
                                  <a href="#/">Video Games for Girls</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#/"> Lighting</a>
                        </li>
                        <li>
                          <a href="#/"> Accessories</a>
                        </li>
                        <li>
                          <a href="#/">Body Parts</a>
                        </li>
                        <li>
                          <a href="#/">Networking</a>
                        </li>
                        <li>
                          <a href="#/">Perfomance Filters</a>
                        </li>
                        <li>
                          <a href="#/"> Engine Parts</a>
                        </li>
                        <li className="hidden">
                          <a href="#/">New Sofas</a>
                        </li>
                        <li className="hidden">
                          <a href="#/">Sleight Sofas</a>
                        </li>
                        <li>
                          <a href="#/" id="more-btn">
                            <i className="fa fa-plus" aria-hidden="true" /> More
                            Categories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column2 col-lg-6 ">
                  <div className="main_menu menu_four menu_position text-center">
                    <nav>
                      <ul>
                        <li>
                          <a href="/">home</a>
                        </li>
                        <li>
                          <a href="/Shop">Shop</a>
                        </li>
                        <li>
                          <a href="/deals">Deals</a>
                        </li>
                        <li>
                          <a href="/Links">Make-Links</a>
                        </li>
                        {!user && (
                          <li>
                            <a href="/login">Login</a>
                          </li>
                        )}

                        <li>
                          <a href="contact.html"> Contact Us</a>
                        </li>
                        {user && (
                          <li onClick={logout}>
                            <a href="/"> logout</a>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="column3 col-lg-3 col-md-6">
                  <div className="header_bigsale h_bigsale_four">
                    <a href="#/">BIG SALE BLACK FRIDAY</a>
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
