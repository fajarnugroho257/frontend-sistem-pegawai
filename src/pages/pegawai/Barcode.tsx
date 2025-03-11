/*eslint-disable*/
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Headers/Header";
import { generateBarcode } from "../../api/auth";
import Swal from "sweetalert2";


const Barcode = () => {
  const [image, setImage] = useState("https://picsum.photos/seed/picsum/200/300");
  const [status, setStatus] = useState(false);
  const [statusAbsen, setStatusAbsen] = useState<string>("");
  const generate = async () => {
    const response = await generateBarcode();
    if (!response.success) {
      Swal.fire({
        title: "Error!",
        text: response.message,
        icon: "error",
        confirmButtonText: "OK",
        width: "400px",
        heightAuto:true
      });
    }
    setImage(response.qrImage);
    setStatus(true);
    setStatusAbsen(response.status);
  }
  return (
    <>
    <div className="h-screen  w-full">
      <div className={`flex flex-col bg-gray-100 h-screen`}>
        <Header/>
        <div className="m-5 p-5 bg-white flex-1 overflow-y-auto scrollbar-hide rounded-md shadow-md">
          <h3>BARCODE ABSEN {statusAbsen && statusAbsen.toUpperCase()}</h3>
          <div className="w-full md:w-1/2 h-56">
            {status && <img className="w-full h-full" src={image} alt="" />}
          </div>
          <button onClick={() => generate()} className="bg-blue-600 px-2 py-1 rounded-md text-white">Generate</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Barcode;