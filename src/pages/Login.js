import { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";
import "../styles/login.css";

const Login = () => {
  const { email, setEmail, password, setPassword, loginAction } = useContext(
    AuthenticationContext
  );

  return (
    <article>
      <p>Login page</p>
      <form onSubmit={(e) => loginAction(e)}>
        <label htmlFor="name">Email :</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Login</button>
      </form>
    </article>
  );
};

export default Login;
