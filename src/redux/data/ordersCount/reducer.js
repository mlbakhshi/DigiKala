import * as Actions from "./actionTypes";
import * as Status from "../../status";

let initState = {
   count:0,
    orderProfile: [],
    isWait: false,
    isProcess: false,
    isDeliver: false,
    status: Status.STATUS_NOT_SET,
};

export const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.ACTION_Count_Order_INCREMENT:
            return {
                ...state,
                count: state.count+1,
            }
        case Actions.ACTION_Wait_Order:
            return {
                ...state,
                status: Status.STATUS_WAIT,
                orderProfile:{
                    ...state.orderProfile,
                    [action.data.ID]: action.data
                } ,
                count:state.count+1,
                // isWait: true,
                // isProcess: false,
                // isDeliver: false,

            }
        case Actions.ACTION_Delete_Order:
            let temp=state.orderProfile
            delete temp[action.data]
            return {
                ...state,
                status: Status.STATUS_WAIT,
                orderProfile:temp,
                count:state.count-1,
                // isWait: true,
                // isProcess: false,
                // isDeliver: false,

            }
        case Actions.ACTION_All_Order:
            return {
                ...state,
                status: Status.STATUS_PROCESS,
                // orderProfile:action.data,
                // isWait: false,
                // isProcess: true,
                // isDeliver: false,
            }
        case Actions.ACTION_Deliver_Order:
            return {
                ...state,
                status: Status.STATUS_DELIVER,
                orderProfile:action.data,
                isWait: false,
                isProcess: false,
                isDeliver: true,
            }
        case Actions.ACTION_Logout_Order:

            return {
                ...state,
                status: Status.STATUS_SUCCESS,
                orderProfile:"",
                count:0,
                userprofile:"",
            }
        default:
            return state;
    }
};
export default ordersReducer;
