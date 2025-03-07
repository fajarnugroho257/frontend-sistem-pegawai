/*eslint-disable*/
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItemIcon, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import Header from "../../components/Headers/Header";

const Pegawai = () => {
  return (
    <>
    <div className="h-screen  w-full">
      <div className={`flex flex-col bg-gray-100 h-screen`}>
        <Header/>
        <div className="m-5 p-5 bg-white flex-1 overflow-y-auto scrollbar-hide rounded-md shadow-md">
          <h3>Dashboard</h3>
          <h3>Dashboard</h3>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pegawai;