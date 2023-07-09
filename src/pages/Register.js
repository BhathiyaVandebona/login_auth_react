import { useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";

const Register = () => {
  const {
    name,
    password,
    email,
    setName,
    setPassword,
    password_confirmation,
    setPasswordConfirmation,
    setEmail,
    registerAction,
  } = useContext(AuthenticationContext);
  return (
    <article>
      <p>Register page</p>
      <form onSubmit={(e) => registerAction(e)}>
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <br />

        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <br />

        <label htmlFor="password_confirmation">Confirmation Password :</label>
        <input
          id="password_confirmation"
          type="password"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>

        <br />

        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <br />

        <button type="submit">Register</button>
      </form>
    </article>
  );
};

export default Register;
