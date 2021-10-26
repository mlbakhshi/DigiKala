import React from "react";
import classes from './CartContainers.module.scss';
import image from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import CartContainer from "./CartContainer/CartContainer";
const CartContainers=(props)=>{
    console.log(props);
    return(
        <div className={classes.CartContainers}>
            <div className={classes.Image} >
                <img src={image} />
            </div>
            <div className={classes.detailBuy}>
                <CartContainer detailProduct={props.detailProduct} />
            </div>
        </div>
    )
}
export default CartContainers;