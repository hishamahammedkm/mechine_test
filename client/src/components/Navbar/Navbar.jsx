import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo">Admin Template</div>
      <div className="links">
        <NavLink to="/" exact className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/employee" className="link" activeClassName="active">
          Employee
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
