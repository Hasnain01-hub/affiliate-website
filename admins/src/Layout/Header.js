import React from "react";
import $ from "jquery";
import { House, User, Users, X } from "phosphor-react";

const Header = () => {
  const menu = (argument) => {
    $("." + argument).toggleClass("open");
  };

  const menuToggle = () => {
    $("#layout-menu").removeClass("menu-open");
  };

  return (
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
              <div data-i18n="Analytics">&nbsp;&nbsp;Admin</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#/" className="menu-link">
              <User size={22} />
              <div data-i18n="Analytics">&nbsp;&nbsp;Logout</div>
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
              <div data-i18n="Authentications">Dropdown</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="/Add-Laywer" className="menu-link">
                  <div data-i18n="Basic">Add</div>
                </a>
              </li>

              <li className="menu-item">
                <a href="/Dropdown" className="menu-link">
                  <div data-i18n="Basic">View</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
