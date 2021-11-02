import * as Actions from './actionTypes'

// Action for count orders
export const incrementOrder = (data) => {
    return {
        type: Actions.ACTION_Count_Order_INCREMENT,
        data
    }
}

export const WaitOrder = (data) => {
    return {
        type: Actions.ACTION_Wait_Order,
        data
    }
}

export const ProcessOrder = (data) => {
    return {
        type: Actions.ACTION_Process_Order,
        data
    }
}

export const DeliverOrder = (data) => {
    return {
        type: Actions.ACTION_Deliver_Order,
        data
    }
}
