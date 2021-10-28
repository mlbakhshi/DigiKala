// import store from "./store";
import axios from "axios";



// export default axios.create({
//     baseURL: base
// });

export const apiRequest = (url, params = {}, method = "get", serverCookie = false) => {
    let base = process.env.REACT_APP_API_REST_BASE_URL;
    let config = {
        method: method,
        baseURL: base,
        url: url,
        timeout: 2000,
        // credentials: 'include'
        // withCredentials: true
    };

    let headers = {};


    if (method.toLowerCase() === "get") {
        config.params = params;
    } else if (method.toLowerCase() === "post") {
        headers['Content-Type'] = 'multipart/form-data';
        let bodyFormData = new FormData();
        Object.keys(params).map(function (key) {
            bodyFormData.set(key, params[key]);
            return 0;
        });
        config.data = bodyFormData;
    }

    config.headers = headers;

    axios.defaults.withCredentials = serverCookie
    return axios(config);
};