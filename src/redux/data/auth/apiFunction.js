import { callApi } from '../../../common/helpers/apiHelper';


// Login Member Api Call
export const MobileProducts = async () => {
    const  {data}  = await callApi('action/index',[],'get');

    return data;
}

// export const myTickets = async () => {
//     let {data}  = null
//     try
//     {
//         await callApi('booking/my-tickets',[],'get');
//     }
//     catch (e)
//     {
//
//     }
//     return data;
// }


// Login Member Api Call
export const BuyTickets = async (ticket_id) => {
    const  {data}  = await callApi('booking/buy-ticket',{ticket_id},'post');
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
export const ticketInfo = async (params) => {
    console.log(params);
    const {data}  = await callApi(`ticket/search/`, params, "get");
    return data;
}