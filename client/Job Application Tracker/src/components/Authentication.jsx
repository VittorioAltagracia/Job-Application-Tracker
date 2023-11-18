import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import { Link } from "react-router-dom";

const AuthenticationComponent = () => {
  return (
    <>
      <Link to="/auth/login" style={{ backgroundColor: "white" }}>
        Log In
      </Link>
      <Link to="/auth/register" style={{ backgroundColor: "white" }}>
        Sign Up
      </Link>
    </>
  );
};

export default AuthenticationComponent;
