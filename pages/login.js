import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import LoginComponent from "../components/Auth/LoginComponent";

const Login = () => {
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
};

export default Login;
