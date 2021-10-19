import axios from "axios";
// import store from "../../redux/store";
// import {logoutAuthSuccess} from "../../redux/data/auth/actions";
import {toast} from "react-toastify";

export const  BaseUrl="http://localhost/"
export const ApiCallTimeout = 40 * 1000; //mili seconds

export const callApi= (url, params = {}, method = "get") => {

    let productMode = process.env.NODE_ENV === 'production';

    /*if(!productMode){
        method='get'
    }*/

    let config = {
        method: method,
        withCredentials:true,
        baseURL: `${BaseUrl}`,
        url: url,
        timeout: ApiCallTimeout,
    };

    let headers = {};
    let auth = {};

    /*if (!productMode) {
        auth[process.env.REACT_APP_ACCESS_TOKEN_PARAM] = store.getState().data.auth.token;
    }*/


    if (method.toLowerCase() === "get") {
        config.params = params;
    } else if (method.toLowerCase() === "post") {
        if (productMode) {

            headers['Content-Type'] = 'multipart/form-data';

            let bodyFormData = new FormData();

            Object.keys(params).map(function (key) {
                bodyFormData.set(key, params[key]);
                return 0;
            });

            config.data = bodyFormData;
        } else {
            config.params = params;
        }
    }

    config.params = {...config.params, ...auth};

    if (productMode) {
        config.headers = headers;
    }


    return requestApi(config)

};

const requestApi = async (config)=>{
    try{
        const json=await axios(config);
        console.log(json,"Fetched Data")
        if(json.status===200) {
            return json;
        }else{
            console.log(json, "Bad json status")
            return {data:null};
        }

    }catch (error) {
        if (error.response) {
            console.log(error.response, "Response Error")
            if(error.response.status===403){
                // store.dispatch(logoutAuthSuccess())
                toast.error("نشست شما منقضی شده است لطفا دوباره وارد شوید")
                // toast.error("برای خریط بلیط ابتدا فرایند ثبت نام را تکمیل کنید .")
            }
            if(error.response.status===406){

                toast(error.response.data.message);
                // toast.error("نشست شما منقضی شده است لطفا دوباره وارد شوید")
                //toast.error.
            }
        } else if (error.request) {
            console.log(error.request, "Request Error")
        } else if (error.message) {
            console.log(error.message, "Message Error")
        }else {
            console.log(error.message, "Unknown Error")
        }
        return {data:null};
    }
}
