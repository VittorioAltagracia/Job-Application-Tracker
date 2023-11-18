import { useState } from "react";
import { Col } from "reactstrap";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [redirectUser, setRedirectUser] = useState(false);

  async function registerUser(e) {
    e.preventDefault();
    const userCreation = await fetch(
      "http://localhost:4000/api/v1/auth/register",
      {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-type": "application/json" },
      }
    );

    userCreation.status === 201
      ? (alert(`User with username ${username} has been created.`),
        setRedirectUser(true))
      : alert(`Registration failed with ${userCreation.status} status code`);
  }

  if (redirectUser) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div>
      <div className="signUp">
        <form onSubmit={registerUser}>
          <h2>Sign Up</h2>
          <Col xs="2" className="mt-3">
            <label htmlFor="username">Username</label>
          </Col>
          <Col>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
          <Col xs="2" className="mt-3">
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
