import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow-sm mb-3">
      <div className="container">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="img/logo.png" alt="Logo Upando!" width="300px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggler="collapse"
            data-target=".navbar-collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <div className="aling-self-end">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a href="index.html" className="nav-link item-menu">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="login.html" className="nav-link item-menu">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="cadastro.html" className="nav-link item-menu">
                  Cadastrar
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link item-menu">
                  <svg
                    className="bi"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    {/* <use xlink:href="/bi.svg#cart3" /> */}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
