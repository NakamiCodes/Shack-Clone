import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className="navLink" to="/">
          {" "}
          Main Page{" "}
        </NavLink>
        <NavLink className="navLink" to="/hotfood">
          {" "}
          Hot Food{" "}
        </NavLink>
        <NavLink className="navLink" to="/custard">
          {" "}
          Custard{" "}
        </NavLink>
        <NavLink className="navLink" to="/bevs">
          {" "}
          Bevs{" "}
        </NavLink>
        <NavLink className="navLink" to="/beer">
          {" "}
          Beer Local Retail{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
