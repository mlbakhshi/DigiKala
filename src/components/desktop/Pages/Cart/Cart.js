import React, {useEffect, useState} from 'react';
import classes from './Cart.module.scss';
import CartContainers from "./CartContainers/CartContainers";
import CartBuy from "./CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import {BuyProduct, DetailProduct} from "../../../../redux/data/auth/apiFunction";
import Login from "../../Logn/Login";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import {Button} from "bootstrap";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const Cart=(props)=>{
    const { auth,userId }  = props;
    let IDD=props.match.params.id;
    const [product,setProduct]=useState([]);
    const [orderProduct,setOrderProduct]=useState();
    useEffect(async ()=>{
        let responseBasket=null;
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
        try {
            responseBasket=await BuyProduct(IDD,userId);
        }catch (e){
            console.log('Error')
        }
            if (responseBasket?.success === true) {
                console.log(responseBasket.data)
                setOrderProduct("true");
                console.log(orderProduct)
            }

    },[]);


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
        auth: state.auth.isLogin,
        userId:state.auth.userprofile
    }
}

export default connect(mapStateToProps, null)(Cart);