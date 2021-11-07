import React, {useEffect, useState} from "react";
// import classes from './WaitingProcess.module.scss';
import classes from '../../../../../Pages/Cart/CartContainers/CartContainers.module.scss';
import {loginAuthSuccess} from "../../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";
import image from "../../../../../../../assets/images/mobilePics/Poco F3.jpg";
import CartContainer from "../../../../../Pages/Cart/CartContainers/CartContainer/CartContainer";

const WaitingPayment=(props)=>{
    const {orders,userId}=props;
    let PackOrders=[];
    let j=0;
    console.log(orders);
    for(let i=0;i<orders.length;i++){
        console.log(orders[i].PackStatus);
        if(orders[i].PackStatus==1 ){
            PackOrders[j]=orders[i];
            // waitingOrders[j]=orders[i];
            j++;
        }
    }
    console.log(PackOrders);
    let orderInformation=null;
    if(orders) {
        orderInformation = PackOrders.map(orderInfo =>
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