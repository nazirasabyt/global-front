import AuthContext from "../context/auth_context";
import { useContext } from "react";

const UseAuthContext = () => {
  return useContext(AuthContext);
};

export default UseAuthContext;
