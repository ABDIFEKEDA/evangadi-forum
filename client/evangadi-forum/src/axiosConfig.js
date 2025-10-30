import axios from 'axios';
const axiosBase = axios.create({
    baseURL :"http://localhost:3006/api"
})
export default axiosBase;