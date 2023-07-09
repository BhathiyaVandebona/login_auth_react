import { Link } from "react-router-dom";
import "../styles/nav.css";

import { useState, useContext } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";

function Nav() {
  const [state, setState] = useState();
  const { user, logout } = useContext(AuthenticationContext);

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        {user && (
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        )}
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
