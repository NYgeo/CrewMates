import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/create" className="nav-item">Create Crewmate</NavLink>
      <NavLink to="/gallery" className="nav-item">Gallery</NavLink>
    </nav>
  );
}

export default Navigation;
