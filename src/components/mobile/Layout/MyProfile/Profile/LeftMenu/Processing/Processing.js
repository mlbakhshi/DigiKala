import React from "react";
import classes from '../../../../../Pages/Cart/CartContainers/CartContainers.module.scss';
import {loginAuthSuccess} from "../../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";
import image from "../../../../../../../assets/images/mobilePics/Poco F3.jpg";
import CartContainer from "../../../../../Pages/Cart/CartContainers/CartContainer/CartContainer";

const WaitingPayment=(props)=>{
    const {orders}=props;
    let PackOrders=[];
    let j=0;
    for(let i=0;i<orders.length;i++){
        if(orders[i].PackStatus===1 ){
            PackOrders[j]=orders[i];
            j++;
        }
    }
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