import axios from "axios";

// console.log(process.env.REACT_APP_BASE_URL);

const httpRequest = axios.create({
    // baseURL: 'https://tiktok.fullstack.edu.vn/api/'
    baseURL: process.env.REACT_APP_BASE_URL,

});

export const get = async (path, options= {}) => {
    const respone = await httpRequest.get(path, options);
    return respone.data;
}

export default httpRequest;