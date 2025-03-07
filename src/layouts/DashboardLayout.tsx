import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/dashboard/datapegawai">Data Pegawai</Link></li>
          <li><Link to="/dashboard/datauser">Data User</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* Tempat render halaman dalam dashboard */}
    </div>
  );
};

export default DashboardLayout;
