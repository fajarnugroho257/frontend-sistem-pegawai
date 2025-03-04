import { Navigate } from "react-router-dom";
import { useContext, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const auth = useContext(AuthContext);
  return auth?.token ? <Navigate to="/dashboard" />  : <>{children}</>;
};

export default PublicRoute;

