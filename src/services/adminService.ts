import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

export const getLogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/stats`);
        return response.data
    } catch (error) {
        console.error("Erro ao buscar logs: ", error);
        return [];
    }
}

export const getMetrics = async () => {
    try {
        const response = await axios.get(`${API_URL}/metrics`);
        return response.data;
    } catch (error) {
        console.error("Erro ao retornar as métricas: ", error);
    }
}