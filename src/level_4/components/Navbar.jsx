import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/GramGP.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} height="40" alt="" loading="lazy" />
        </Link>

        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
              <Link className="nav-link">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <Link className="nav-link">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>

          <form className="w-auto">
            <div className="input-group">
              <div className="input-group-text border-0 ps-0">
                <i className="fas fa-search"></i>
              </div>
              <input type="search" className="form-control bb-input" placeholder="Type query" aria-label="Search" />
            </div>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
              <NavLink to="/level_4" end className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/level_4/clinic-list" className="nav-link">Clinics</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/level_4/find-patient" className="nav-link">Patients</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/level_4/telemedicine" className="nav-link">Telemedicine</NavLink>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="rounded-circle"
                  height="22" alt="" loading="lazy" />
              </Link>

              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item">Profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Settings</Link>
                </li>
                <hr className="dropdown-divider my-1" />
                <li>
                  <Link to={"login"} className="dropdown-item">Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
