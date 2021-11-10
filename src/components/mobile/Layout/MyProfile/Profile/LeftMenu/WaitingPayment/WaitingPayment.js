import React from "react";
import classes from '../../../../../Pages/Cart/CartContainers/CartContainers.module.scss';
import {loginAuthSuccess} from "../../../../../../../redux/data/auth/actions";
import {connect} from "react-redux";
import image from "../../../../../../../assets/images/mobilePics/Poco F3.jpg";
import CartContainer from "../../../../../Pages/Cart/CartContainers/CartContainer/CartContainer";
import Auxx from "../../../../../../../hoc/Auxx/Auxx";
import {DelOrder} from "../../../../../../../redux/data/ordersCount/actions";

const WaitingPayment=(props)=>{
    console.log(props)
    const {orders}=props;
    let orderInformation=null;
    const {ACTION_Orders_DELETE}=props;

    const handleDelete = (id) => {
        console.log(id)
        ACTION_Orders_DELETE(id.ID)
        props.onRemoveItem&&props.onRemoveItem()
    }
    return(
        <Auxx>
            {
                Object.keys(orders).map(ID =>
                    <div key={ID} className={classes.CartContainers}>
                        <div className={classes.Image} >
                            <img src={image} />
                            <div className={classes.Del} onClick={() => handleDelete(props.orders[ID])}>
                                <div>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <span>
                                 حذف
                            </span>
                            </div>
                        </div>
                        <div className={classes.detailBuy}>
                            <CartContainer onRemoveItem={props.onRemoveItem} key={"card"+ID} detailProduct={orders[ID]} />
                        </div>
                    </div>

                )
            }
        </Auxx>
    )

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
        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
    }
}

const mapStateToProps  = (state) => {
    return {

        orders: state.data.cntOrder.orderProfile,
        userId:state.data.auth.userprofile,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WaitingPayment);