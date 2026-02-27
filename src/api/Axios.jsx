import axios from "axios"

const api = axios.create({
    baseURL: "https://food-application-backend-tngx.onrender.com/api"
})

// attachjwt token automatically to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api;