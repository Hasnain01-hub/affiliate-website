import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducers";
import { loginUser, registerUser } from "../function/auth";
const Login = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const reduxDispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    loginUser(data.email, data.password)
      .then((res) => {
        // console.log(res);
        if (res.status === 400) return toast.error("Invalid credentials");
        if (res.status === 200) {
          console.log(res);
          reduxDispatch(
            loginSuccess({
              name: res.data.user.name,
              email: res.data.user.email,
              token: res.data.token,
            })
          );
          setData({ email: "", password: "" });
          //   window.location.href = "/";
        } else {
          toast.error("Invalid Credentials");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("handleRegister");

    if (data.email == "" && data.password.length < 5)
      return toast("Please enter valid email and password");

    await registerUser(data)
      .then((res) => {
        reduxDispatch(
          loginSuccess({
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.token,
          })
        );
        setData({ email: "", password: "" });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
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
                      <input
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                        type="text"
                      />
                    </p>
                    <p>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input
                        value={data.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                      />
                    </p>
                    <div className="login_submit">
                      <a href="#/">Lost your password?</a>
                      <label htmlFor="remember">
                        <input id="remember" type="checkbox" />
                        Remember me
                      </label>
                      <button onClick={handleLogin}>login</button>
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
                      <input
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                        type="text"
                      />
                    </p>
                    <p>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input
                        value={data.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                      />
                    </p>
                    <div className="login_submit">
                      <button onClick={handleRegister}>Register</button>
                    </div>
                  </form>
                </div>
              </div>
              {/*register area end*/}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
