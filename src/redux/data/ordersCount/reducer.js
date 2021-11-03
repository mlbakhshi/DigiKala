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
            return {
                ...state,
                count: state+1,
            }
        case Actions.ACTION_Wait_Order:
            return {
                ...state,
                status: Status.STATUS_WAIT,
                userprofile:action.data,
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
        default:
            return state;
    }
};
export default ordersReducer;
