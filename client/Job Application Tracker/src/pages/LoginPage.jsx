import { useContext, useState } from "react";
import { Col } from "reactstrap";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectUser, setRedirectUser] = useState(false);
  const [errors, setErrors] = useState("");
  const { setUserInfo } = useContext(UserContext);

  async function loginUser(e) {
    e.preventDefault();
    if (!email || !password) {
      setErrors("Please provide email and password.");
    }
    const userAuth = await fetch("http://localhost:4000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
    const { user, token } = await userAuth.json();

    if (userAuth.status === 200) {
      setUserInfo(userAuth);
      localStorage.setItem("sessionToken", token);
      localStorage.setItem("username", user.username);
      alert(`User with username ${user.username} logged in.`);
      // setRedirectUser(true);
    } else {
      alert(
        `Login failed with ${userAuth.status} status code. ${userAuth.error}`
      );
    }
  }

  if (redirectUser) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div>
      <div className="signUp">
        <form onSubmit={loginUser}>
          <h2>Log In</h2>
          <Col xs="2">
            <label htmlFor="email">Email</label>
          </Col>
          <input
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Col xs="2" className="mt-3">
            <label htmlFor="password">Password</label>
          </Col>
          <Col>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <button type="submit" className="p-1">
            Log In
          </button>
        </form>
        {errors ? <p>{errors}</p> : null}
      </div>
    </div>
  );
};

export default LoginPage;
