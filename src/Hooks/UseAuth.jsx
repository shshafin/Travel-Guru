import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const UseAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuth;
