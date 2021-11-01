import React, {useEffect, useState} from "react";
import classes from './CartContainers.module.scss';
import image from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import CartContainer from "./CartContainer/CartContainer";
import {BuyProduct, MobileProducts, SuspendProducts} from "../../../../../redux/data/auth/apiFunction";
import Auxx from "../../../../../hoc/Auxx/Auxx";
import {connect} from "react-redux";
const CartContainers=(props)=>{
    console.log(props);
const [orders,setOrders]=useState();
    const {count}=props;

    useEffect(async ()=>{
        let response=null;
        try {
            response=await SuspendProducts(props);

        }catch (e){
            console.log('Error')
        }
        setOrders(response);
console.log(orders);
    },[]);

    let orderInformation=null;
    if(orders) {
        orderInformation = orders.map(orderInfo =>
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
       <Auxx>
           {orderInformation}
       </Auxx>
    )
}



export default (CartContainers);