import "./navbar.css";

export const NavBar = () => {
  return (
    <nav id="navMenu" className="nav">
      <button id="navToggle" className="nav-toggle">
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
      <ul id="navMenuList" className="nav-list hide-on-narrow-screen">
        <li>
          <a className="nav-list-link" href="#">
            Body temperature
          </a>
        </li>
        <li>
          <a className="nav-list-link" href="#">
            Body weight
          </a>
        </li>
        <li>
          <a className="nav-list-link" href="#">
            Hydration
          </a>
        </li>
        <li>
          <a className="nav-list-link" href="#">
            Daily planing
          </a>
        </li>
        <li>
          <a className="nav-list-link" href="#">
            Table box
          </a>
        </li>
        <li>
          <a className="nav-list-link" href="#">
            Info posts
          </a>
        </li>
        <li>
          <a className="nav-list-link" href="#">
            Contact
          </a>
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