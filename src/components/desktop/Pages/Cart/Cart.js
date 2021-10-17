import React from 'react';
import classes from './Cart.module.scss';
import CartContainers from "./CartContainers/CartContainers";
import CartBuy from "./CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";

const Cart=()=>{
    return(
        <Auxx>
        <Toolbar />
        <div className={classes.Cart}>
            <section className={classes.CartContainers}>
                <CartContainers />
            </section>
            <aside className={classes.CartBuy}>
                <CartBuy />
            </aside>
        </div>
            <Footer />
            </Auxx>
    )
}
export default Cart;