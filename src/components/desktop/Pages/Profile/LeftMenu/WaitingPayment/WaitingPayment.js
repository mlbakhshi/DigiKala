import React from "react";
import classes from './WaitingProcess.module.scss';
import {loginAuthSuccess} from "../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";

const WaitingPayment=(props)=>{
const {orders,userId}=props;
console.log(orders);
console.log(userId);
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

const mapStateToProps  = (state) => {
    console.log(state,"dfgfgdfgfgdfg");
    return {

       orders: state.data.cntOrder.userprofile,
        userId:state.data.auth.userprofile,
        // counter:state.data.cntOrder.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPayment);