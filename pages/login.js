import React from "react";
import LoginComponent from "../components/Auth/LoginComponent";
import AuthLayout from "../components/Auth/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <LoginComponent />{" "}
    </AuthLayout>
  );
};

export default Login;
