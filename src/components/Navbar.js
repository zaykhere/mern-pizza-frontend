import React from "react";
import logo from "../logo.png";

function Header() {
  return (
    <div className="header-menu navbar-dark bg-dark">
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <div id="taglines">
        <h4 class="main-line">THE BEST IN TOWN</h4>
        <h2 class="sub-line">About our Pizzaria</h2>
      </div>
    </div>  
  );
}

export default Header;
