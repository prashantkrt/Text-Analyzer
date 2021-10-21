import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title1}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.title2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.title3}
                </a>
              </li>
            </ul>

            <div className="form-check form-switch text-light">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className={`form-check-label text-${props.textcolor}`}
                htmlFor="flexSwitchCheckDefault"
                //{`form-check-label text-${props.togglemode==='light'?'dark':'light'}`}
              >
                Enable Dark Mode
              </label>
            </div>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string,
  title3: PropTypes.string,
};

Navbar.defaultProps = {
  title1: "Navbar",
  title2: "About",
  title3: "Contact",
};
