import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./Components/Login";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./Components/Home";
import { loginSuccess } from "./reducers";
import React from "react";
import { currentUser } from "./function/auth";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      getcurrentuser(token)
        .then((res) => {
          dispatch(
            loginSuccess({
              name: res.data.user.name,
              email: res.data.user.email,
              _id: res.data.user._id,
            })
          );
        })
        .catch();
    }
  }, [dispatch]);

  const getcurrentuser = async (token) => {
    if (token) {
      return await currentUser(token);
    }
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
