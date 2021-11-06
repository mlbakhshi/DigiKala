import * as Actions from "./actionTypes";
import * as Status from "../../status";

let initState = {
   count:0,
    userprofile: null,
    isWait: false,
    isProcess: false,
    isDeliver: false,
    status: Status.STATUS_NOT_SET,
};

// const initialState = initState;

export const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.ACTION_Count_Order_INCREMENT:
            console.log("reducer");
            return {
                ...state,
                count: state.count+1,
            }
        case Actions.ACTION_Wait_Order:
            console.log(action.data)
            return {
                ...state,
                status: Status.STATUS_WAIT,
                userprofile:action.data,
                count:action.data.length,
                // isWait: true,
                // isProcess: false,
                // isDeliver: false,

            }
        case Actions.ACTION_Process_Order:
            return {
                ...state,
                status: Status.STATUS_PROCESS,
                userprofile:action.data,
                isWait: false,
                isProcess: true,
                isDeliver: false,
            }
        case Actions.ACTION_Deliver_Order:
            return {
                ...state,
                status: Status.STATUS_DELIVER,
                userprofile:action.data,
                isWait: false,
                isProcess: false,
                isDeliver: true,
            }
        case Actions.ACTION_Logout_Order:
            console.log("reducer");
            return {
                ...state,
                status: Status.STATUS_SUCCESS,
                userprofile:"",
                count:null,
            }
        default:
            return state;
    }
};
export default ordersReducer;
