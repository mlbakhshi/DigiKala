import React, {useEffect, useState} from 'react';
import classes from './Cart.module.scss';
import CartContainers from "./CartContainers/CartContainers";
import CartBuy from "./CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import {DetailProduct} from "../../../../redux/data/auth/apiFunction";
import Login from "../../Logn/Login";

const Cart=(props)=>{
    console.log(props);
    let IDD=props.match.params.id;
    const [product,setProduct]=useState([]);

    useEffect(async ()=>{

        let response=null;
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        if(response?.success===true) {
            console.log(response.data)
            setProduct(response.data)
            console.log(product)
        }


    },[]);

    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken} />
    }




    return(
        <Auxx>
        <Toolbar />
        <div className={classes.Cart}>
            <section className={classes.CartContainers}>
                <CartContainers detailProduct={product} />
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