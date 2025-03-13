/*eslint-disable*/
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ListItemIcon, List, ListItem, ListItemText, Toolbar } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Menu";


import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";
import { WidthFull } from "@mui/icons-material";

export default function Sidebar() {
  const navigate = useNavigate();

  const [sideBar, setSideBar] = useState(true);
  const handleSidebar = () => {
    setSideBar(!sideBar);
  }
  const location = useLocation();
  const path = location.pathname;
  const dataMenu = [
    {link: "/pegawai", name:"Dashboard", logo: "fa fa-bank", menus: ['/pegawai', '/pegawai/profil']}, 
    {link: "/pegawai/barcode", name:"Barcode", logo: "fa fa-barcode", menus: ['/pegawai/barcode']},
    {link: "/pegawai/absen", name:"Absen", logo: "fa fa-camera", menus: ["/pegawai/absen"]},
    {link: "/pegawai/schedule-generate", name:"Jadwal", logo: "fa fa-calendar", menus: ["/pegawai/schedule-generate"]},
  ];
  return (
    <>
    <div className="flex h-screen">
      <div className={`flex flex-col bg-red-300 h-screen ${sideBar ? "w-fit md:w-52" : "md:w-fit"}`}>
        <div className="h-14 flex items-center bg-gray-300 sticky top-0 z-10">
          <div className="w-full px-2">
            <div className="flex justify-between">
              <h5 className={`text-black sticky  ${sideBar ? "hidden md:block" : "hidden"}`}>Pegawai</h5>
              <div className={` ${sideBar ? "mx-auto md:mx-0" : "md:mx-auto"}`}>
                <SettingsIcon className="cursor-pointer" onClick={handleSidebar}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <ul>
            {dataMenu.map((data) => (
            <li onClick={() => navigate(data.link)} key={data.name} className={`cursor-pointer hover:bg-gray-700 hover:text-white rounded-md m-3 ${data.menus?.includes(path)? "bg-gray-700 text-white" : "text-black"}`}>
              <div className="flex items-center gap-2 p-3">
                <i className={data.logo}></i>
                <ListItemText primary={data.name} className={`${sideBar ? "hidden md:block" : "hidden"}`} />
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
