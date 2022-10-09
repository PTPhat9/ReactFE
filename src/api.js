import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;
// var instance = axios.create({
//     baseURL: process.env.REACT_APP_API_ROOT,
    
//   });
  
const products = {
    getFeatured: () => axios.get("/admin/featured"),
}

const api = {
    products
}

export default api;