import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const PublicRoute = () => {
  const auth = useContext(AuthContext);
  return auth?.token ? <Navigate to="/dashboard" />  : <Outlet />;
};

export default PublicRoute;

