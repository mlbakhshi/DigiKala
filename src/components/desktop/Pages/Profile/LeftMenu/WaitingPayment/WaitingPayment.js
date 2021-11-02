import React from "react";
import classes from './WaitingProcess.module.scss';
import {loginAuthSuccess} from "../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";

const WaitingPayment=(props)=>{

    return(
        <div>
            {props.children}
            sjvh
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

        // dispatching actions returned by action creators
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
        // decrement: () => dispatch(decrement()),
        // reset: () => dispatch(reset()),

    }
}

export default connect(null, mapDispatchToProps)(WaitingPayment);