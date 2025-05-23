import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/saved-jobs';

// Get all saved jobs
export const getSavedJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`, { withCredentials: true });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Save a job
export const saveJob = async (jobId) => {
    try {
        const response = await axios.post(`${API_URL}/save/${jobId}`, {}, { withCredentials: true });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Unsave a job
export const unsaveJob = async (jobId) => {
    try {
        const response = await axios.delete(`${API_URL}/unsave/${jobId}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        throw error;
    }
};
