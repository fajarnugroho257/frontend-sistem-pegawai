/*eslint-disable*/
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItemIcon, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import Header from "../../components/Headers/Header";
import { generateBarcode } from "../../api/auth";


const Barcode = () => {
  const [image, setImage] = useState("https://picsum.photos/seed/picsum/200/300");
  const generate = async () => {
    const response = await generateBarcode();
    setImage(response.qrImage);
  }
  return (
    <>
    <div className="h-screen  w-full">
      <div className={`flex flex-col bg-gray-100 h-screen`}>
        <Header/>
        <div className="m-5 p-5 bg-white flex-1 overflow-y-auto scrollbar-hide rounded-md shadow-md">
          <h3>Barcode</h3>
          <div className="w-full md:w-1/2 h-56">
            <img className="w-full h-full" src={image} alt="" />
          </div>
          <button onClick={() => generate()} className="bg-blue-600 px-2 py-1 rounded-md text-white">Generate</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Barcode;