import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"; // Pastikan path sudah benar
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PublicRoute from "./PublicRoute";


const AppRoutes = () => {
    return (
        <Routes>
          {/* Halaman yang hanya bisa diakses jika SUDAH LOGIN */}
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
    
          {/* Halaman yang hanya bisa diakses jika BELUM LOGIN */}
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />
          
          {/* Default Route jika halaman tidak ditemukan */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      );
};

export default AppRoutes;
