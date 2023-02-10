import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./Components/Home";
import { loginSuccess } from "./reducers";
import React from "react";
import { currentUser } from "./function/auth";
import NotFound from "./Components/NotFound";
import Deals from "./Components/Deals";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // const token = Cookies.get("jwt");
    const token = window.localStorage.getItem("token");
    if (token) {
      getcurrentuser(token)
        .then((res) => {
          dispatch(
            loginSuccess({
              name: res.data.user.name,
              email: res.data.user.email,
              _id: res.data.user._id,
              tag: res.data.user.tag,
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
        <Route path="/deals" element={<Deals />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
