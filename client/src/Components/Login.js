import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="breadcrumbs_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <ul>
                  <li>
                    <a href="index-2.html">home</a>
                  </li>
                  <li>My account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login_page_bg">
        <div className="container">
          <div className="customer_login">
            <div className="row">
              {/*login area start*/}
              <div className="col-lg-6 col-md-6">
                <div className="account_form login">
                  <h2>login</h2>
                  <form action="#">
                    <p>
                      <label>
                        Username or email <span>*</span>
                      </label>
                      <input type="text" />
                    </p>
                    <p>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input type="password" />
                    </p>
                    <div className="login_submit">
                      <a href="#">Lost your password?</a>
                      <label htmlFor="remember">
                        <input id="remember" type="checkbox" />
                        Remember me
                      </label>
                      <button type="submit">login</button>
                    </div>
                  </form>
                </div>
              </div>
              {/*login area start*/}
              {/*register area start*/}
              <div className="col-lg-6 col-md-6">
                <div className="account_form register">
                  <h2>Register</h2>
                  <form action="#">
                    <p>
                      <label>
                        Email address <span>*</span>
                      </label>
                      <input type="text" />
                    </p>
                    <p>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input type="password" />
                    </p>
                    <div className="login_submit">
                      <button type="submit">Register</button>
                    </div>
                  </form>
                </div>
              </div>
              {/*register area end*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
