import React, {useEffect, useState} from "react";
// import classes from './WaitingProcess.module.scss';
import classes from '../../../../../Pages/Cart/CartContainers/CartContainers.module.scss';
import {loginAuthSuccess} from "../../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";
import image from "../../../../../../../assets/images/mobilePics/Poco F3.jpg";
import CartContainer from "../../../../../Pages/Cart/CartContainers/CartContainer/CartContainer";

const WaitingPayment=(props)=>{
const {orders,userId}=props;
let waitingOrders=[];
let j=0;
for(let i=0;i<orders.length;i++){
    if(orders[i].PayStatus==0){
        console.log(orders[i]);
        waitingOrders[j]=orders[i];
        // waitingOrders[j]=orders[i];
        j++;
    }
}
console.log(waitingOrders);
let orderInformation=null;
    if(orders) {
        orderInformation = waitingOrders.map(orderInfo =>
            <div className={classes.CartContainers}>
                <div className={classes.Image} >
                    <img src={image} />
                </div>
                <div className={classes.detailBuy}>
                    <CartContainer detailProduct={orderInfo} />
                </div>
            </div>

        )
    }

    return(
        <div>
            {props.children}
            {orderInformation}
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

       orders: state.data.cntOrder.orderProfile,
        userId:state.data.auth.userprofile,
        // counter:state.data.cntOrder.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPayment);