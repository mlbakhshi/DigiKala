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
    const {data}  = await callApi('site/login',values,'get');
    return data;
}

// SignIn Member Api Call
export const logoutMember = async () => {
    const {data}  = await callApi('site/logout', {}, "get");
    return data;
}
// SignIn Member Api Call
export const BuyProduct = async (productId,userId) => {
    console.log(productId);
    const {data}  = await callApi(`site/payment`, {productId, userId}, "get");
    return data;
}


export const SuspendProducts = async (userId) => {
    const {data}  = await callApi(`site/orders`, {userId}, "get");
    return data;
}
