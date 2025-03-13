/*eslint-disable*/
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItemIcon, List, ListItem, ListItemText, Toolbar, TextField } from "@mui/material";
import Header from "../components/Headers/Header";
import { getDataProfil } from "../api/auth";
import logo from "../assets/img/profil.jpg"



const Profil = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorpassword, setErrorpassword] = useState(false);
  const [errorNama, setErrorNama] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const dataProfil = async () => {
      try {
        const response = await getDataProfil();
        setUsername(response.data.username);
        setNama(response.data.nama);
      } catch (error) {
        
      }
    }
    dataProfil();
  }, []);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // Fungsi untuk menangani perubahan file
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          // setImage(data.imageUrl); // Update gambar profil dengan URL baru
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };
  // 
  return (
    <>
    <div className="h-screen  w-full">
      <div className={`flex flex-col bg-gray-100 h-screen`}>
        <Header/>
        <div className="m-5 p-5 bg-white flex-1 overflow-y-auto scrollbar-hide rounded-md shadow-md">
          <div className="w-full grid grid-flow-row gap-3 md:gap-4 md:grid-cols-[25%_75%]">
            <div className="w-full h-fix bg-gray-50 border border-gray-100 p-5 rounded-sm shadow-md">
              <div className="relative h-20 w-20 md:h-30 md:w-30 lg:h-36 lg:w-36 border rounded-full mx-auto">
                <img src={logo} alt="" className="h-full w-full rounded-full" />
                <div onClick={handleClick} className="cursor-pointer absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-red-500"><i className="fa fa-camera"></i></div>
                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
              </div>
              <div className="">
                <h3 className="text-center text-sm md:text-base my-2">Nama</h3>
                <div className="grid grid-rows gap-1">
                  <div className="p-2 text-xs md:text-base grid grid-cols-[35%_5%_60%] border rounded-sm">
                    <p>Alamat</p>
                    <p>:</p>
                    <p>Magelang</p>
                  </div>
                  <div className="p-2 text-xs md:text-base grid grid-cols-[35%_5%_60%] border rounded-sm">
                    <p>Alamat</p>
                    <p>:</p>
                    <p>Magelang</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-fix bg-gray-50 border border-gray-100 p-5 rounded-sm shadow-md">
              <h3>Profil Anda</h3>
              <hr className="mt-1" />
              <div className="grid grid-flow-row gap-2 mt-4">
                <div className="p-2 text-xs md:text-base grid grid-cols-[35%_5%_60%] rounded-sm items-center">
                  <p>Username</p>
                  <p>:</p>
                  <TextField
                    error={errorUsername}
                    id="outlined-textarea"
                    label="Username"
                    placeholder="Username"
                    multiline
                    size="small"
                    className="bg-white w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="p-2 text-xs md:text-base grid grid-cols-[35%_5%_60%] rounded-sm items-center">
                  <p>Nama</p>
                  <p>:</p>
                  <TextField
                    error={errorNama}
                    id="outlined-textarea"
                    label="Nama"
                    placeholder="Nama"
                    multiline
                    size="small"
                    className="bg-white w-full"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="p-2 text-xs md:text-base grid grid-cols-[35%_5%_60%] rounded-sm items-center">
                  <p>Password</p>
                  <p>:</p>
                  <TextField
                    error={errorpassword}
                    id="outlined-password-input"
                    label="Password"
                    size="small"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profil;