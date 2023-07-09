import axios from "../axios/axios";
import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {
  // here goes the states and all
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function csrf() {
    try {
      await axios.get("/sanctum/csrf-cookie");
    } catch (error) {
      console.log(error);
    }
  }

  async function userProfile() {
    try {
      let response = await axios.get("/api/user");
      setUser(response.data);
    } catch (error) {
      setErrors(error.response.data);
      console.log(error.response.data);
    }
  }

  async function loginAction(e) {
    e.preventDefault();
    // the login action should go here
    try {
      await csrf();
      if (name && password) {
        await axios.post("/login", {
          email, // name or email
          password,
        });
      }
      navigate("/profile");
    } catch (error) {
      setErrors(error.response.data);
      console.log(error.response.data);
    }
  }

  async function registerAction(e) {
    e.preventDefault();
    // the register action should go here
    try {
      await csrf();
      if (name && email && password && password_confirmation) {
        await axios.post("/register", {
          name, // name or email
          email,
          password,
          password_confirmation,
        });
      }
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async function logout() {
    try {
      await csrf();
      let response = await axios.post("/logout");
      setUser(null);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        csrf,
        loginAction,
        registerAction,
        userProfile,
        errors,
        setErrors,
        user,
        setUser,
        name,
        setName,
        password,
        setPassword,
        password_confirmation,
        setPasswordConfirmation,
        email,
        setEmail,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
