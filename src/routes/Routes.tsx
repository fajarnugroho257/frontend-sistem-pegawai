import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Daftar from "../pages/Daftar";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../pages/Register";
import PegawaiLayout from "../layouts/PegawaiLayout";
import Pegawai from "../pages/pegawai/Pegawai";
import Barcode from "../pages/pegawai/Barcode";
import Absen from "../pages/pegawai/Absen";
import Jadwal from "../pages/pegawai/Jadwal";
import Profil from "../pages/Profil";


const AppRoutes = () => {
    return (
      <Routes>
        {/* Group untuk halaman yang butuh autentikasi */}
        {/* PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/pegawai" element={<PegawaiLayout />}>
            <Route index element={<Pegawai />} />
            <Route path="barcode" element={<Barcode />} />
            <Route path="absen" element={<Absen />} />
            <Route path="schedule-generate" element={<Jadwal />} />
            <Route path="profil" element={<Profil />} />
          </Route>
        </Route>

        {/* Group untuk halaman yang bebas diakses */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
        </Route>

        {/* Redirect jika halaman tidak ditemukan */}
        <Route path="*" element={<Navigate to="/pegawai" />} />
      </Routes>
      );
};

export default AppRoutes;
