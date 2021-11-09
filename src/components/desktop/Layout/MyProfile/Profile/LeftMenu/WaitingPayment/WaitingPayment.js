import React from "react";
import classes from '../../../../../Pages/Cart/CartContainers/CartContainers.module.scss';
import {loginAuthSuccess} from "../../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";
import image from "../../../../../../../assets/images/mobilePics/Poco F3.jpg";
import CartContainer from "../../../../../Pages/Cart/CartContainers/CartContainer/CartContainer";

const WaitingPayment=(props)=>{
const {orders}=props;
let waitingOrders=[];

let orderInformation=null;
    if(orders) {
        orderInformation = Object.keys(props.orders).reduce((array, key) => {
            return [...array, {key: props.orders[key]}]
        }, []).map(orderInfo =>
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


    }
}

const mapStateToProps  = (state) => {
    return {

       orders: state.data.cntOrder.orderProfile,
        userId:state.data.auth.userprofile,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPayment);