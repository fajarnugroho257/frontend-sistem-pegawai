import axios from "axios";

const API_URL = "http://localhost:8000";

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
}

export const register = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  };