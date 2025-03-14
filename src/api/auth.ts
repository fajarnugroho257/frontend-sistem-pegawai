import axios from "axios";

const API_URL = "http://192.168.1.105:8000";
// const API_URL = "https://backend-sistem-pegawai-production.up.railway.app";

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
}

export const register = async (nama: string, username: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth`, { nama, username, password });
    return response.data;
};

export const generateBarcode = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/barcode`, 
        {
            headers: {
                "Authorization": `Bearer ${token}`, // Kirim token
                "Content-Type": "application/json"
            }
        }
    );
    return response.data;
};

export const postAbsen = async (data:object) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/absen`,
        data, {
        headers: {
            "Authorization": `Bearer ${token}`, // Kirim token
            "Content-Type": "application/json"
        }
    });
    return response.data;
};

export const getDataGeneratejadwal = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/generate-jadwal`,
        {
        headers: {
            "Authorization": `Bearer ${token}`, // Kirim token
            "Content-Type": "application/json"
        }
    });
    return response.data;
};

export const getDataProfil = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/users/profil`, 
        {
            headers: {
                "Authorization": `Bearer ${token}`, // Kirim token
                "Content-Type": "application/json"
            }
        }
    );
    return response.data;

};