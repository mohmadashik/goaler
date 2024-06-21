import axios from 'axios';

const api_req = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials:true,
});

export default api_req;