import React from "react";
import classes from './CartContainers.module.scss';
import image from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import CartContainer from "./CartContainer/CartContainer";
const CartContainers=()=>{
    return(
        <div className={classes.CartContainers}>
            <div className={classes.Image} >
                <img src={image} />
            </div>
            <div className={classes.detailBuy}>
                <CartContainer />
            </div>
        </div>
    )
}
export default CartContainers;