import * as Actions from './actionTypes'

// Action for request
export const loginAuthRequest = (data) => {
    return {
        type: Actions.ACTION_DATA_AUTH_login_REQUEST,
        data
    }
}

// When Success !!
export const loginAuthSuccess = (data) => {
    return {
        type: Actions.ACTION_DATA_AUTH_login_SUCCESS,
        data
    }
}
// When Success !!
export const logoutAuthSuccess = () => {
    return {
        type: Actions.ACTION_DATA_AUTH_logout_SUCCESS
    }
}

// When Faild
export const loginAuthFaild = (data) => {
    return {
        type: Actions.ACTION_DATA_AUTH_login_FAILD,
        data
    }
}