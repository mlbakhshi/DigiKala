import React, { useState} from "react";
import classes from './CartContainers.module.scss';
import image from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import CartContainer from "./CartContainer/CartContainer";
import Auxx from "../../../../../hoc/Auxx/Auxx";
import {connect} from "react-redux";
import {DelOrder} from "../../../../../redux/data/ordersCount/actions";
const CartContainers=(props)=>{
    console.log(props)
    const {ACTION_Orders_DELETE}=props;

    const handleDelete = (id) => {
        console.log(id.ID)
        ACTION_Orders_DELETE(id.ID)
        props.onRemoveItem&&props.onRemoveItem()
    }
    return(
        <Auxx>
            {
                Object.keys(props.OrdersList).map(ID =>
                    <div key={ID} className={classes.CartContainers}>
                        <div className={classes.Image} >
                            <img src={image} />
                            <div className={classes.Del} onClick={() => handleDelete(props.OrdersList[ID])}>
                                <div>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <span>
                                 حذف
                            </span>
                            </div>
                        </div>
                        <div className={classes.detailBuy}>
                            <CartContainer onRemoveItem={props.onRemoveItem} key={"card"+ID} detailProduct={props.OrdersList[ID]} />
                        </div>
                    </div>

                )
            }
        </Auxx>
    )
}
const mapStateToProps  = (state) => {
    return {
        userId:state.data.auth.userprofile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CartContainers);