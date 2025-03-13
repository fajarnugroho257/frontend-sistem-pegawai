/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Headers/Header";
import { getDataGeneratejadwal } from "../../api/auth";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
    {name: 'Frozen yoghurt', calori:159, protein:6.0},
];



let no = 0;
const Jadwal = () => {

    // data karyawan
    interface UserData {
        user_id: string;
        nama: string;
    }
    // const [karyawan, setKaryawan] = useState<UserData | null>(null);
    const [karyawan, setKaryawan] = useState<UserData[]>([]);

    useEffect(() => {
        const getDataGenerate = async () => {
            try {
                const response = await getDataGeneratejadwal();
                // console.log(response);
                setKaryawan(response.karyawan);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getDataGenerate();
    }, []);

  return (
    <>
    <div className="h-screen  w-full">
      <div className={`flex flex-col bg-gray-100 h-screen`}>
        <Header/>
        <div className="m-5 p-5 bg-white flex-1 overflow-y-auto scrollbar-hide rounded-md shadow-md">
            <div className="md:w-1/2">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="center">Nama</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {karyawan.map((row, index) => (
                            <TableRow
                            key={index}
                            >
                            <TableCell width={10} align="center">{index+1}</TableCell>
                            <TableCell align="left">{row.nama}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Jadwal;