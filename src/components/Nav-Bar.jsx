import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink
          className="navLink"
          to="/"
          style={{ backgroundColor: "#c24567", padding: "10px" }}
        >
          {" "}
          Main Page{" "}
        </NavLink>
        <NavLink
          className="navLink"
          to="/hotfood"
          style={{ backgroundColor: "#c24567", padding: "10px" }}
        >
          {" "}
          Hot Food{" "}
        </NavLink>
        <NavLink
          className="navLink"
          to="/custard"
          style={{ backgroundColor: "#c24567", padding: "10px" }}
        >
          {" "}
          Custard{" "}
        </NavLink>
        <NavLink
          className="navLink"
          to="/bevs"
          style={{ backgroundColor: "#c24567", padding: "10px" }}
        >
          {" "}
          Bevs{" "}
        </NavLink>
        <NavLink
          className="navLink"
          to="/beer"
          style={{ backgroundColor: "#c24567", padding: "10px" }}
        >
          {" "}
          Beer Local Retail{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
