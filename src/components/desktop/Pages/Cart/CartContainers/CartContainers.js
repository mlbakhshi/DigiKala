import React from "react";
import classes from './CartContainers.module.scss';
import image from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import CartContainer from "./CartContainer/CartContainer";
import Auxx from "../../../../../hoc/Auxx/Auxx";
import {connect} from "react-redux";
const CartContainers=(props)=>{

    return(
       <Auxx>
           {
               Object.keys(props.OrdersList).map(ID =>
                   <div key={ID} className={classes.CartContainers}>
                       <div className={classes.Image} >
                           <img src={image} />

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

export default  connect(mapStateToProps, null)(CartContainers);