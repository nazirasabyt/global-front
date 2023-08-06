import React from "react";
import RegisterComponent from "../components/Auth/RegisterComponent";
import AuthLayout from "../components/Auth/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      {" "}
      <RegisterComponent />{" "}
    </AuthLayout>
  );
};

export default Register;
