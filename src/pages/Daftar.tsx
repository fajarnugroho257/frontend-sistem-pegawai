import { useState, useContext } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/img/logo512.png"
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';


const Daftar = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorNama, setErrorNama] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errorpassword, setErrorpassword] = useState(false);
  interface error_data {
    path: string,
    msg: string,
  }
  const [errorValidation, setErrorValidation] = useState<error_data[]>([]);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (nama.length === 0) {
        setErrorNama(true);
      } else {
        setErrorNama(false);
      }
      if (username.length === 0) {
        setErrorUsername(true);
      } else {
        setErrorUsername(false);
      }
      if (password.length === 0) {
        setErrorpassword(true);
      } else {
        setErrorpassword(false);
      }
      const response = await register(nama, username, password);
      if (!response.success) {
        Swal.fire({
          title: "Error!",
          text: response.message,
          icon: "error",
          confirmButtonText: "OK",
          width: "400px",
          heightAuto:true
        });
        // setErrorValidation(response.errors);
        // setErrorValidation();
        // const er_data = response.errors;
        // er_data.map((val : {msg: string, path:string, }) => {
        //   console.log(val.msg);
        //   // const err = [pesan => val.msg];
        //   // setErrorValidation(err);
        // })
      }
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
          width: "400px",
          heightAuto:true
        });
        console.error("Register failed", error.message);
      } else {
        console.error("Register failed", error);
      }
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center bg-blue-200">
        <div className=" mx-3 md:mx-auto bg-slate-100 w-full md:w-1/4 rounded-lg">
          <div className="p-6">
            <div className="">
              <img className="mx-auto mb-3" src={logo} alt="Logo" width={100} />
            </div>
            <div className="mt-4">
              <TextField
                error={errorNama}
                id="outlined-textarea"
                label="Nama"
                placeholder="Nama"
                multiline
                size="small"
                className="bg-white w-full"
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <TextField
                error={errorUsername}
                id="outlined-textarea"
                label="Username"
                placeholder="Username"
                multiline
                size="small"
                className="bg-white w-full"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-4">
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
            <div className="mt-8 flex justify-between items-center">
              <button className="bg-blue-400 text-white rounded-md py-2 px-3 " onClick={handleRegister}>Daftar</button>
              <Link to="/login" className="underline"><i className="fa fa-arrow-left"></i> Masuk</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Daftar;
