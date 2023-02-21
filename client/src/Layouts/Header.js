import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";
import "../App.css";
import logo from "../asset/logo.png";
const Header = () => {
  useEffect(() => {
    $(".canvas_open").on("click", function () {
      $(".Offcanvas_menu_wrapper").addClass("active");
    });

    $(".canvas_close").on("click", function () {
      $(".Offcanvas_menu_wrapper").removeClass("active");
    });
  }, []);

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
                <div id="menu" className="text-start ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <Link to="/">Home</Link>
                    </li>
                    {!user && (
                      <>
                        <li className="menu-item-has-children">
                          <Link to="/login">Login</Link>
                        </li>
                      </>
                    )}

                    {user && (
                      <>
                        {/* <li className="menu-item-has-children">
                          <Link to="/Make-Links">Make-Links</Link>
                        </li> */}
                        <li className="menu-item-has-children">
                          <Link onClick={logout}>Logout</Link>
                        </li>
                      </>
                    )}
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
            {/* <div className="header_top"></div> */}
            {/*header top start*/}
            {/*header middel start*/}
            <div style={{ display: "none" }} className="header_middle_style4">
              <div
                style={{ padding: "5px" }}
                className="row align-items-center"
              >
                <div className="column1 col-lg-3 col-md-3 col-4">
                  <div className="logo">
                    <Link to="/">
                      <img width="100" src={logo} alt="" />
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
                          <div className="logo">
                            <Link to="/">
                              <img width="100" src={logo} alt="" />
                            </Link>
                          </div>
                        </li>
                        <li>
                          <Link to="/">home</Link>
                        </li>

                        {!user && (
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                        )}

                        <li>
                          <Link to="/contact"> Contact Us</Link>
                        </li>
                        {user && (
                          <>
                            {/* <li>
                              <Link to="/Links">Make-Links</Link>
                            </li> */}
                            <li onClick={logout}>
                              <Link to="/"> logout</Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </nav>
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
