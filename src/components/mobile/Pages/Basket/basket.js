import React, {useEffect, useState} from 'react';
import classes from './basket.module.scss';
import CartContainers from "../Cart/CartContainers/CartContainers";
import CartBuy from "../Cart/CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import {AllOrders, BuyProduct, DetailProduct, SuspendProducts} from "../../../../redux/data/auth/apiFunction";
import Login from "../../Logn/Login";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import {Button} from "bootstrap";
import {loginAuthSuccess} from "../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../redux/data/ordersCount/actions";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const Basket=(props)=>{
    const { auth,userId }  = props;

    // useEffect(async ()=>{
    //     //fetch orders from DB
    //     let checkOrders=null;
    //
    //     try{
    //         checkOrders = await AllOrders(userId);
    //     }
    //     catch (e){
    //         console.log('Error')
    //     }
    //     if(checkOrders?.success===true){
    //         console.log(checkOrders);
    //         console.log( ACTION_Orders_SUCCESS(checkOrders.data))
    //         ACTION_Orders_SUCCESS(checkOrders.data);
    //     }
    // },[]);


    console.log(auth);
    if(auth)
    {

            return (
                <Auxx>
                    <Toolbar/>
                    <div className={classes.Cart}>
                        <section className={classes.CartContainers}>
                            <CartContainers userId={userId}/>
                        </section>
                        <aside className={classes.CartBuy}>
                            <CartBuy/>
                        </aside>
                    </div>
                    <Footer/>
                </Auxx>
            )


    }
    else {
        return(
            <Login />
        )

    }

}
const mapStateToProps  = (state) => {
    console.log(state.auth);
    return {
        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        orders: state.data.cntOrder.orderProfile,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//         // dispatching actions returned by action creators
//         ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
//         ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),
//         // reset: () => dispatch(reset()),
//
//     }
// }

export default connect(mapStateToProps, null)(Basket);