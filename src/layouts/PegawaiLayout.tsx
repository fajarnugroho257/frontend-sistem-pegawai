import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";

const PegawaiLayout = () => {
  return (
    <>
    <div className="flex flex-row">
      <Sidebar /> 
      <Outlet />
    </div>
           
      {/* <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <HeaderStats />
        
      </div> */}
    </>
  );
};

export default PegawaiLayout;
