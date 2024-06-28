import axios from "axios";

export const axiosInstance = axios.create({
    header: {
        'Content-Type': 'application/json',
    },
});