import axios from "axios";

const API_URL = "http://192.168.1.105:8000";

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
}

export const register = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
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