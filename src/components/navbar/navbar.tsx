import { Link, useLocation } from "react-router";
import "./navbar.css";
import { useState } from "react";

export const NavBar = () => {
  const [epandedToggle, setExpandedToggle] = useState(false);
  const navMenuListClass = epandedToggle
    ? "nav-list"
    : "nav-list hide-on-narrow-screen";

  const location = useLocation();

  return (
    <nav id="navMenu" className="nav">
      <button
        id="navToggle"
        className="nav-toggle"
        onClick={() => {
          setExpandedToggle(!epandedToggle);
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="burger-icon"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            className=""
          ></path>
        </svg>
      </button>
      <ul id="navMenuList" className={navMenuListClass}>
        <li>
          <Link
            className={`nav-list-link ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-list-link ${
              location.pathname === "/body-temp" ? "active" : ""
            }`}
            to="/body-temp"
          >
            Body temperature
          </Link>
        </li>
        <li>
          <Link
            className={`nav-list-link ${
              location.pathname === "/body-weight" ? "active" : ""
            }`}
            to="/body-weight"
          >
            Body weight/height
          </Link>
        </li>
        <li>
          <Link
            className={`nav-list-link ${
              location.pathname === "/inhalation" ? "active" : ""
            }`}
            to="/inhalation"
          >
            Daily planing
          </Link>
        </li>
        <li>
          <Link
            className={`nav-list-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            Contact
          </Link>
        </li>
        <li>
          <a href="#">
            <svg
              className="support-heart"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
            </svg>
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};
