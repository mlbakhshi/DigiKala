import * as Actions from "./actionTypes";

let initState = {
   count:0
};

// const initialState = initState;

export const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.ACTION_Count_Order_INCREMENT:
            return {
                ...state,
                count: state+1,
            }
        default:
            return state;
    }
};
export default ordersReducer;
