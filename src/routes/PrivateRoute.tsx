import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
  const auth = useContext(AuthContext);
  return auth?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
