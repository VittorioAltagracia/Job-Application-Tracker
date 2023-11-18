import { useState } from "react";
import { Col } from "reactstrap";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectUser, setRedirectUser] = useState(false);

  async function registerUser(e) {
    e.preventDefault();
    const userCreation = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });

    userCreation.status === 200
      ? (alert(`User with username ${username} logged in.`),
        setRedirectUser(true))
      : alert(`Login failed with ${userCreation.status} status code.`);
  }

  if (redirectUser) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div>
      <div className="signUp">
        <form onSubmit={registerUser}>
          <h2>Log In</h2>
          <Col xs="2">
            <label htmlFor="email">Email</label>
          </Col>
          <input
            id="email"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
