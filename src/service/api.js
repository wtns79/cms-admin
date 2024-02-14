import axios from 'axios';
import TokenService from "./token";

let headers = {
 'Content-Type': 'application/json'
}

const axiosApi = axios.create({
    timeout: 10000,
    headers:headers
});

const errorFn = function (error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }

    console.log(error.config);
}

// Add a request interceptor
axiosApi.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${TokenService.getAccessToken()}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosApi.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    errorFn(error)
    return Promise.reject(error);
});



export default axiosApi