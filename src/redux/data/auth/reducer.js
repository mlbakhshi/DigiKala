import * as Actions from "./actionTypes";
import * as Status from '../../status';

let initState = {
    userprofile: null,
    userdata:null,
    isLogin: false,
    status: Status.STATUS_NOT_SET,
    message: "",
};

const initialState = initState;

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ACTION_DATA_AUTH_logout_SUCCESS:
            return {
                ...state,
                userprofile: null,
                userdata:null,
                isLogin: false,
                status: Status.STATUS_SUCCESS,
                message: "",
            }
        case Actions.ACTION_DATA_AUTH_login_REQUEST:
            return {
                ...state,
                status: Status.STATUS_IN_PORGRESS,
                message: ""
            }
        case Actions.ACTION_DATA_AUTH_login_SUCCESS:
            console.log(action)
            return {
                ...state,
                userprofile: action.data.id,
                userdata: action.data,
                isLogin: true,
                status: Status.STATUS_SUCCESS,
                message: "",

            }
        case Actions.ACTION_DATA_AUTH_login_FAILD:
            return {
                ...state,
                data: {},
                status: Status.STATUS_FAILED,
                message: "خطای سمت سرور، مجددا امتحان کنید"
            }
        default:
            return state;
    }
};
export default authReducer;
