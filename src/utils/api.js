import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080',
});

export const fetchPrograms = async (province) => {
    try {
        const response = await api.get('/programs', {
            params: { province: province || undefined },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching programs:", error);
        throw error;
    }
};

export default api;