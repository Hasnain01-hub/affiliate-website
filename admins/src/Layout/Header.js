import React, { useEffect, useState } from "react";
import $ from "jquery";
import { House, User, Users, X } from "phosphor-react";
import { toast } from "react-toastify";

const Header = () => {
  const [admin, setAdmin] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("admin")));
    setLoading(false);

    if (localStorage.getItem("admin") === null) {
      window.location.href = "/login";
    }
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
                  LameFame
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
                <span className="menu-header-text">Attorney</span>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  <House size={22} className="menu-icon" />
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

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
                    <a href="/Add-Admins" className="menu-link">
                      <div data-i18n="Basic">Add Admins</div>
                    </a>
                  </li>

                  <li className="menu-item">
                    <a href="/View-Admins" className="menu-link">
                      <div data-i18n="Basic">View Admins</div>
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
