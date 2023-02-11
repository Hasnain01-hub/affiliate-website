import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer_widgets">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-7">
                <div className="widgets_container contact_us">
                  <h3>GET THE APP</h3>
                  <div className="aff_content">
                    <p>
                      <strong>LameFame</strong> App is now available on Google
                      Play &amp; App Store. Get it now.
                    </p>
                  </div>
                  <div className="app_img">
                    <figure className="app_img">
                      <a href="#/">
                        <img src="assets/img/icon/icon-appstore.png" alt="" />
                      </a>
                    </figure>
                    <figure className="app_img">
                      <a href="#/">
                        <img src="assets/img/icon/icon-googleplay.png" alt="" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-5">
                <div className="widgets_container widget_menu">
                  <h3>Information</h3>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#/">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#/">New products</a>
                      </li>
                      <li>
                        <a href="#/">Best sales</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="#/">Order History</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="widgets_container widget_menu">
                  <h3>My Account</h3>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wish List</a>
                      </li>
                      <li>
                        <a href="#/">Prices drop</a>
                      </li>
                      <li>
                        <a href="#/">Order History</a>
                      </li>
                      <li>
                        <a href="#/">International Orders</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="widgets_container widget_menu">
                  <h3>Customer Service</h3>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="#/">Sitemap</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="#/">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#/">Order History</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wish List</a>
                      </li>
                      <li>
                        <a href="#/">Specials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-7 col-sm-12">
                <div className="widgets_container">
                  <h3>CONTACT INFO</h3>
                  <div className="footer_contact">
                    <div className="footer_contact_inner">
                      <div className="contact_icone">
                        <img src="assets/img/icon/icon-phone.png" alt="" />
                      </div>
                      <div className="contact_text">
                        <p>
                          Hotline Free 24/24: <br /> <strong>0123456789</strong>
                        </p>
                      </div>
                    </div>
                    <p>
                      Your address goes here. <br /> demo@example.com
                    </p>
                  </div>
                  <div className="footer_social">
                    <ul>
                      <li>
                        <a className="facebook" href="#/">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#/">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#/">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#/">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a className="rss" href="#/">
                          <i className="fa fa-rss" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="copyright_area">
                  <p>
                    © 2022{" "}
                    <a href="index-2.html" className="text-uppercase">
                      LameFame
                    </a>
                    . Made with <i className="fa fa-heart" /> by{" "}
                    <a href="https://www.darkcoders.com/">darkcoders</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer_payment text-end">
                  <img src="assets/img/icon/payment.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
