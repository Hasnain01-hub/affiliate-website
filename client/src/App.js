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
import Shop from "./Components/Shop";
import CategoryProducts from "./Components/CategoryProducts";
import NotAvailable from "./Components/NotAvailable";
import Links from "./Components/Links";
import Contact from "./Components/Contact";
import SingleDeal from "./Components/SingleDeal";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import About from "./Components/About";
import SingleProductDeal from "./Components/SingleProductDeal";
import CategoryDeals from "./Components/CategoryDeals";
import AffiliateDisclosure from "./Components/AffiliateDisclosure";
import AAG from "./Components/AAG";
import SEO from "react-seo-component";

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
              profit: res.data.user.profit,
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
      <SEO
        title="DealsGhar"
        titleTemplate="DealsGhar.com"
        titleSeparator={`-`}
        description="Deals Ghar - India’s Fastest Site for Online Shopping Deals"
        image="https://www.dealsghar.com/static/media/logo.3e7528cb1aa6be19cf48.png"
        pathname="https://www.dealsghar.com/"
        siteLanguage="en"
        author="Aakash"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Affilaite-Disclosure" element={<AffiliateDisclosure />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Amazon-Affiliate-Agreement" element={<AAG />} />
        <Route path="/shop/:cat" element={<CategoryProducts />} />
        <Route path="/Deal/:id" element={<SingleDeal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/Deal/Product/:id" element={<SingleProductDeal />} />
        <Route path="/Deals/:cat" element={<CategoryDeals />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Incomplete-Profile" element={<NotAvailable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
