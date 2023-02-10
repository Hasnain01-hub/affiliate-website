import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducers";
import { loginUser, registerUser } from "../function/auth";
const Login = () => {
  const [logindata, setlogindata] = React.useState({
    email: "",
    password: "",
  });
  const [registerdata, setregisterdata] = React.useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    tag: "",
  });
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    loginUser(logindata.email, logindata.password)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          reduxDispatch(
            loginSuccess({
              name: res.data.user.name,
              email: res.data.user.email,
              token: res.data.token,
            })
          );
          window.localStorage.setItem("token", res.data.token);
          setlogindata({ email: "", password: "" });
          toast.success("Login Success");
          navigate("/");
        } else {
          toast.error("Invalid Credentials");
        }
      })
      .catch((e) => {
        if (e.response.status === 401)
          return toast.error("Invalid credentials");
        console.log(e);
      });
  };
  const handleloginChange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleregisterChange = (e) => {
    setregisterdata({ ...registerdata, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    if (registerdata.email === "" && registerdata.password.length < 5)
      return toast("Please enter valid email and password");

    await registerUser(registerdata)
      .then((res) => {
        reduxDispatch(
          loginSuccess({
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.token,
          })
        );
        window.localStorage.setItem("token", res.data.token);
        setregisterdata({ email: "", password: "" });
        toast.success("Register Success");
        navigate("/");
      })
      .catch((e) => {
        if (e.response.status === 402)
          return toast.error("User Already Exists");

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
                        value={logindata.email}
                        onChange={handleloginChange}
                        name="email"
                        type="text"
                      />
                    </p>
                    <p>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input
                        value={logindata.password}
                        onChange={handleloginChange}
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
                        Name <span>*</span>
                      </label>
                      <input
                        value={registerdata.name}
                        onChange={handleregisterChange}
                        name="name"
                        type="text"
                      />
                    </p>
                    <p>
                      <label>
                        Email address <span>*</span>
                      </label>
                      <input
                        value={registerdata.email}
                        onChange={handleregisterChange}
                        name="email"
                        type="text"
                      />
                    </p>
                    <p>
                      <label>
                        Passwords <span>*</span>
                      </label>
                      <input
                        value={registerdata.password}
                        onChange={handleregisterChange}
                        name="password"
                        type="password"
                      />
                    </p>
                    <p>
                      <label>
                        Phone Number <span>*</span>
                      </label>
                      <input
                        value={registerdata.phoneNumber}
                        onChange={handleregisterChange}
                        name="phoneNumber"
                        type="number"
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
