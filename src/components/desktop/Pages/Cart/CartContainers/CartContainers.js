import React, {useEffect, useState} from "react";
import classes from './CartContainers.module.scss';
import image from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import CartContainer from "./CartContainer/CartContainer";
import {BuyProduct, MobileProducts, SuspendProducts} from "../../../../../redux/data/auth/apiFunction";
const CartContainers=(props)=>{
    console.log(props);
const [orders,setOrders]=useState();

    useEffect(async ()=>{
        let response=null;
        try {
            response=await SuspendProducts(props);

        }catch (e){
            console.log('Error')
        }
        setOrders(response);

    },[])

    return(
        <div className={classes.CartContainers}>
            <div className={classes.Image} >
                <img src={image} />
            </div>
            <div className={classes.detailBuy}>
                <CartContainer detailProduct={orders} />
            </div>
        </div>
    )
}
export default CartContainers;