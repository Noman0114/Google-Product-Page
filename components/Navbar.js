import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headroom from "react-headroom";
const Navbar = () => {
  return (
    <Headroom>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Logo as a dropdown toggle */}
          <div className="dropdown">
            <button
              className="btn btn-link text-decoration-none p-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              <img src="/logo.png" alt="Logo" width="200px" />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ width: "20vw" }}
            >
              <li style={{ borderBottom: "1px solid black" }}>
                <a className="dropdown-item fw-bold" href="#">
                  About Google
                </a>
                <p className="ms-3 fs-6">
                  Our mission, products, and impact
                </p>
              </li>
              <li style={{ borderBottom: "1px solid black" }}>
                <a className="dropdown-item fw-bold" href="#">
                  Another action
                </a>
                <p className="ms-3 fs-6">
                  Our mission, products, and impact
                </p>
              </li>
              <li>
                <a className="dropdown-item fw-bold" href="#">
                  Belonging
                </a>
                <p className="ms-3 fs-6">
                  Expanding what's possible for everyone
                </p>
              </li>
            </ul>
          </div>
  
          {/* Navbar toggler for additional items (if needed) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active border-bottom border-primary"
                  aria-current="page"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Commitments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Stories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </Headroom>
  
  
  );
};

export default Navbar;
