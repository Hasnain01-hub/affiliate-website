import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/user";
import { Provider } from "react-redux";
import SEO from "react-seo-component";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: rootReducer });
root.render(
  <>
    <SEO
      title="DealsGhar"
      titleTemplate="Homepage - Dealsghar.com"
      titleSeparator={`-`}
      description="Deals Ghar - India’s Fastest Site for Online Shopping Deals"
      image="https://www.dealsghar.com/static/media/logo.3e7528cb1aa6be19cf48.png"
      pathname="https://www.dealsghar.com/"
      siteLocale="en_us"
      siteLanguage="en"
      author="Aakash"
    />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
