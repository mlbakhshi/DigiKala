import * as Actions from './actionTypes'

// Action for count orders
export const incrementOrder = (data) => {
    return {
        type: Actions.ACTION_Count_Order_INCREMENT,
        data
    }
}
