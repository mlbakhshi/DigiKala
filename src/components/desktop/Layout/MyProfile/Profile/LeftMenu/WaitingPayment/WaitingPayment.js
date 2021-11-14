import React from "react";
import classes from '../../../../../Pages/Cart/CartContainers/CartContainers.module.scss';
import {loginAuthSuccess} from "../../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";
import CartContainer from "../../../../../Pages/Cart/CartContainers/CartContainer/CartContainer";
import Auxx from "../../../../../../../hoc/Auxx/Auxx";
import {DelOrder} from "../../../../../../../redux/data/ordersCount/actions";

const WaitingPayment=(props)=>{
const {orders}=props;
let waitingOrders=[];
    const {ACTION_Orders_DELETE} = props;
    const handleDelete = (id) => {
        ACTION_Orders_DELETE(id)
        props.onRemoveItem&&props.onRemoveItem()
    }
let orderInformation=null;
    if(orders) {

        return (
            <Auxx>
                {
                    Object.keys(orders).map(ID =>
                        <div key={ID} className={classes.CartContainers}>
                            <div className={classes.Image} >
                                <div>
                                    <img
                                        src={require('../../../../../../../assets/Upload/' + props.orders[ID].ProductPicture).default}/>
                                </div>
                                <div className={classes.DelSection}>
                                    <div className={classes.Del} onClick={() => handleDelete(props.orders[ID].ID)}>
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </div>
                                </div>


                            </div>
                            <div className={classes.detailBuy}>
                                <CartContainer onRemoveItem={props.onRemoveItem} key={"card" + ID}
                                               detailProduct={orders[ID]}/>
                            </div>
                        </div>
                    )
                }
            </Auxx>
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

        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
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