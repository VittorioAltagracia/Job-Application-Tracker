import NavigationBar from "./Navbar";
import { useEffect, useContext } from "react";
import { UserContext } from "../../utils/UserContext";
import React from "react";
import { Navbar } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const token = localStorage.getItem("sessionToken");
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (token && username) {
      setUserInfo(token, username);
    }
  }, [token, username, setUserInfo]);

  const loggedUser = userInfo?.username;
  console.log(loggedUser);

  return (
    <Navbar color="dark" dark>
      {loggedUser && (
        <>
          <NavLink to="/profile" className="nav-link" style={{ color: "#fff" }}>
            My Profile
          </NavLink>
          <p>Welcome, {username}</p>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </>
      )}
      {!loggedUser && (
        <>
          <NavLink
            className="nav-link"
            to="/auth/login"
            style={{ color: "#fff" }}
          >
            <span>Log In</span>
          </NavLink>
          <NavLink
            className="nav-link"
            to="/auth/register"
            style={{ color: "#fff" }}
          >
            Sign Up
          </NavLink>
        </>
      )}
    </Navbar>
  );
};

export default Dashboard;
