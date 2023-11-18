import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar color="dark" dark>
      <NavLink className="nav-link" to="/auth/login" style={{ color: "#fff" }}>
        <span>Log In</span>
      </NavLink>
      <NavLink
        className="nav-link"
        to="/auth/register"
        style={{ color: "#fff" }}
      >
        Sign Up
      </NavLink>
    </Navbar>
  );
};

export default NavigationBar;
