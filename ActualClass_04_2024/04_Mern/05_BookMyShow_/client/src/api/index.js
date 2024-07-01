import axios from "axios";

export const axiosInstance = axios.create({
    header: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});