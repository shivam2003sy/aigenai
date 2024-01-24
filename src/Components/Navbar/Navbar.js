import React from "react";
import { Link, NavLink } from "react-router-dom";
import ankitaImage from "../Card/ankita.jpg";
import logo_light from "../../Assests/logo-black.png";
import logo_dark from "../../Assests/logo-white.png";
import search_icon_light from "../../Assests/search-w.png";
import search_icon_dark from "../../Assests/search-b.png";
import toggle_light from "../../Assests/night.png";
import toggle_dark from "../../Assests/day.png";

import "./navbar.css";
import Login from "../LoginSignup/Login";

const Navbar = ({username, email , id }) => {
  return (
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
            <h4 class="offcanvas-title" id="offcanvasNavbarLabel">
              Gen-Ai Portal
            </h4>
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
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/dashboard"
            >
              Explore
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/interview">
              Interview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/experience">
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/contest">
              Contest
            </NavLink>
          </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="me-2" type="text" placeholder="Search" />
              <img src={search_icon_light} alt="" />
            </form>
            {/* <div>
                {username ? (<p

                  style={{  
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    display:"flex",
                    alignItems: "center",
                  }}
                >

                  {username}
                </p>):  
                <p>
                  <Login />
                </p>  
                  }
              </div> */}
            <div>
              <Link to='/profile'>

           
              {/* <a class="navbar-brand" style={{display:"flex", alignItems: "center"}} href="#"> */}
                <img
                  src={ankitaImage}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginLeft:"30px",
                  }}
                />
                   </Link>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
