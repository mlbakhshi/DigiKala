import { callApi } from '../../../common/helpers/apiHelper';


// Login Member Api Call
export const MobileProducts = async () => {
    const  {data}  = await callApi('site/index',[],'get');
    return data;
}


// Login Member Api Call
export const DetailProduct = async (id) => {
    const  {data}  = await callApi('product/index',{id},'get');
    return data;
}

// Login Member Api Call
export const loginMember = async (values) => {
    const {data}  = await callApi('site/login',values,'post');
    return data;
}

// SignIn Member Api Call
export const logoutMember = async () => {
    const {data}  = await callApi('site/logout', {}, "get");
    return data;
}
// SignIn Member Api Call
export const BuyProduct = async (params) => {
    console.log(params);
    const {data}  = await callApi(`ticket/search/`, params, "get");
    return data;
}