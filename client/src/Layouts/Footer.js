import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer_widgets p-3">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-7">
                <div className="widgets_container contact_us">
                  <h3>GET THE APP</h3>
                  <div className="aff_content">
                    <p>
                      sitename.domain is a participant in the Amazon Associates
                      Program, an affiliate advertising program designed to
                      provide a means for sites to earn advertising fees by
                      advertising and linking to amazon.in.” site.domain is the
                      world’s best website for deals, offers and discount. We
                      work effortlessly to complete your shopping needs. One
                      stop solution to all your shopping needs..
                    </p>
                    <p>
                      Amazon and the Amazon logo are trademarks of{" "}
                      <b>Amazon.in</b>, <b>Amazon.com</b>, Inc. or its
                      affiliates.
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
              <div className="col-lg-6 col-md-3 col-sm-5">
                <div className="widgets_container widget_menu">
                  <h3>Information</h3>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/affiliate-disclosure">Affiliate Disclosure</a>
                      </li>
                      <li>
                        <a href="/agreement">Amazon Affiliate Agreement</a>
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
                      Your address goes here. <br /> admin@dealsghar.com
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
