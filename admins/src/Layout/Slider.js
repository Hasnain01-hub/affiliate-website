import React, { useEffect, useState } from "react";
import $ from "jquery";
import { House, User, Users, X } from "phosphor-react";
import { toast } from "react-toastify";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [admin, setAdmin] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("admin") === null) {
      window.location.href = "/login";
    }
    setAdmin(JSON.parse(localStorage.getItem("admin")));
    setLoading(false);
  }, []);

  const menu = (argument) => {
    $("." + argument).toggleClass("open");
  };

  const menuToggle = () => {
    $("#layout-menu").removeClass("menu-open");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");

    toast.success("Logout Success", {
      position: toast.POSITION.TOP_CENTER,
      theme: "dark",
    });

    setInterval(() => {
      window.location.href = "/login";
    }, 1000);
  };

  return (
    <>
      {loading === true ? (
        <></>
      ) : (
        <>
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav- px-4 py-4 me-xl-4" href="#/">
                <X
                  size={22}
                  onClick={() => {
                    menuToggle();
                  }}
                />
              </a>
            </div>
            <div className="app-brand demo">
              <a href="/" className="app-brand-link">
                <span className="app-brand-text demo menu-text fw-bolder ms-0">
                  DealsGhar
                </span>
              </a>
              <a
                href="#/"
                className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i className="bx bx-chevron-left bx-sm align-middle" />
              </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
              <li className="menu-item">
                <a href="#/" className="menu-link">
                  <User size={22} />
                  <div data-i18n="Analytics">&nbsp;&nbsp;{admin.email}</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="#/" className="menu-link">
                  <User size={22} />
                  <div data-i18n="Analytics" onClick={handleLogout}>
                    &nbsp;&nbsp;Logout
                  </div>
                </a>
              </li>

              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Menu Options</span>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  <House size={22} className="menu-icon" />
                  <div data-i18n="Analytics">Dashboard</div>
                </Link>
              </li>
              {/* <li className="menu-item deals">
                <a
                  href="#/"
                  className="menu-link menu-toggle"
                  onClick={() => {
                    menu("deals");
                  }}
                >
                  <Users size={22} className="menu-icon" />
                  Deals
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <Link to="/view-deals" className="menu-link">
                      <div data-i18n="Analytics">View Deals</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/add-deals" className="menu-link">
                      <div data-i18n="Analytics">Add Deals</div>
                    </Link>
                  </li>
                </ul>
              </li> */}

              {admin.role === "SuperAdmin" ? (
                <>
                  <li className="menu-item tag">
                    <a
                      href="#/"
                      className="menu-link menu-toggle"
                      onClick={() => {
                        menu("tag");
                      }}
                    >
                      <Users size={22} className="menu-icon" />
                      <div data-i18n="Authentications">Admins</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="/add-admins" className="menu-link">
                          <div data-i18n="Basic">Add Admins</div>
                        </Link>
                      </li>

                      <li className="menu-item">
                        <a href="/view-admins" className="menu-link">
                          <div data-i18n="Basic">View Admins</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <></>
              )}

              <li className="menu-item ">
                <a href="/Add-Store" className="menu-link">
                  <Users size={22} className="menu-icon" />
                  <div data-i18n="Authentications">Stores</div>
                </a>
              </li>

              {admin.role === "SuperAdmin" ? (
                <>
                  <li className="menu-item ">
                    <a href="/users" className="menu-link">
                      <Users size={22} className="menu-icon" />
                      <div data-i18n="Authentications">Users</div>
                    </a>
                  </li>
                </>
              ) : (
                <></>
              )}

              <li className="menu-item ">
                <a href="/Banners" className="menu-link">
                  <Users size={22} className="menu-icon" />
                  <div data-i18n="Authentications">Banners</div>
                </a>
              </li>

              {admin.role === "SuperAdmin" ? (
                <>
                  <li className="menu-item affiliate">
                    <a
                      href="#/"
                      className="menu-link menu-toggle"
                      onClick={() => {
                        menu("affiliate");
                      }}
                    >
                      <Users size={22} className="menu-icon" />
                      <div data-i18n="Authentications">Affiliates</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="/Add-Affiliate-ID" className="menu-link">
                          <div data-i18n="Basic">Add Affiliates IDs</div>
                        </Link>
                      </li>

                      <li className="menu-item">
                        <a href="/Attach-Affiliate" className="menu-link">
                          <div data-i18n="Basic">Attach IDs to Users</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <></>
              )}

              <li className="menu-item dd">
                <a
                  href="#/"
                  className="menu-link menu-toggle"
                  onClick={() => {
                    menu("dd");
                  }}
                >
                  <Users size={22} className="menu-icon" />
                  <div data-i18n="Authentications">Products</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <Link to="/Add-Products/1" className="menu-link">
                      <div data-i18n="Basic">Add Products</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <a href="/View-Products" className="menu-link">
                      <div data-i18n="Basic">View / Remove Products</div>
                    </a>
                  </li>

                  <li className="menu-item">
                    <a href="/Add-Category" className="menu-link">
                      <div data-i18n="Basic">Add Category</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;
