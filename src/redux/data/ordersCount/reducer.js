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
        // case Actions.ACTION_Count_Order_INCREMENT:
        //     console.log("reducer");
            // return {
            //     ...state,
            //     count: state.count+1,
            // }
        case Actions.ACTION_Wait_Order:
            console.log(action.data)
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
            console.log()
            return {
                ...state,
                status: Status.STATUS_WAIT,
                orderProfile:Object.values(state.orderProfile).filter(i => i.id !== action.data),
                count:state.count-1,
                // isWait: true,
                // isProcess: false,
                // isDeliver: false,

            }
        case Actions.ACTION_Process_Order:
            return {
                ...state,
                status: Status.STATUS_PROCESS,
                orderProfile:action.data,
                isWait: false,
                isProcess: true,
                isDeliver: false,
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
            console.log("reducer");
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