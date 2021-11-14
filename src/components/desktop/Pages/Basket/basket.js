import React, { useState} from 'react';
import classes from './basket.module.scss';
import CartContainers from "../Cart/CartContainers/CartContainers";
import CartBuy from "../Cart/CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import Login from "../../Logn/Login";
import {connect} from "react-redux";


const Basket=(props)=>{
    const { auth,orders }  = props;

    const [state,setState]=useState(new Date().getTime())

    const onRemoveItem=()=>{
        setState(new Date().getTime())
    }

    if(auth)
    {
            return (
                <Auxx>
                    <Toolbar/>
                    <div className={classes.Cart}>
                        <section className={classes.CartContainers}>

                            <CartContainers onRemoveItem={onRemoveItem} key={state} OrdersList={orders}/>
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
    return {
        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        orders: state.data.cntOrder.orderProfile,
    }
}

export default connect(mapStateToProps, null)(Basket);