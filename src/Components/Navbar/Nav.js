import React from "react";
import logo_light from "../../Assests/logo-black.png";
import logo_dark from "../../Assests/logo-white.png";
import search_icon_light from "../../Assests/search-w.png";

const Nav =()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo_light} alt="Bootstrap" width="100%" height="54" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Login"
                >
                  explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inteview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contest
                </a>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="me-2" type="text" placeholder="Search" />
              <img src={search_icon_light} alt="" />
            </form>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Nav;