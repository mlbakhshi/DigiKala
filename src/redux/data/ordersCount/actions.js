import * as Actions from './actionTypes'

// Action for count orders
export const incrementOrder = () => {
    return {
        type: Actions.ACTION_Count_Order_INCREMENT,

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
export const LogoutOrder = (data) => {
    return {
        type: Actions.ACTION_Logout_Order,
        data
    }
}
export const DelOrder = (data) => {
    return {
        type: Actions.ACTION_Delete_Order,
        data
    }
}
