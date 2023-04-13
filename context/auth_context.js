import React, { useState } from "react";
import { getLocalStorageAuth } from "../utils/helpers";
import Router from "next/router";

const initialContext = {
  auth: getLocalStorageAuth(),
  authLogin: () => {},
  authLogout: () => {},
};

const AuthContext = React.createContext(initialContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getLocalStorageAuth());

  const authLogin = (newUser) => {
    setAuth(newUser);
    localStorage.setItem("auth", JSON.stringify(newUser));
  };
  const authLogout = () => {
    setAuth({
      username: "",
      id: "",
      email: "",
      provider: "",
    });
    localStorage.removeItem("auth");
    Router.reload("/");
  };

  return (
    <AuthContext.Provider value={{ auth, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
