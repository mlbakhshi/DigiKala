import React, {useEffect, useState} from 'react';
import classes from './basket.module.scss';
import CartContainers from "../Cart/CartContainers/CartContainers";
import CartBuy from "../Cart/CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import {BuyProduct, DetailProduct, SuspendProducts} from "../../../../redux/data/auth/apiFunction";
import Login from "../../Logn/Login";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import {Button} from "bootstrap";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const Basket=(props)=>{
    const { auth,userId }  = props;
    const [orderProduct,setOrderProduct]=useState("false");
    // useEffect(async ()=>{
    //     let response=null;
    //     try {
    //         response=await DetailProduct(IDD);
    //     }catch (e){
    //         console.log('Error')
    //     }
    //     if(response?.success===true) {
    //         console.log(response.data)
    //         setProduct(response.data)
    //         console.log(product)
    //     }
    // },[]);

    useEffect(async ()=>{
        let responseBasket=null;
        try {
            responseBasket=await SuspendProducts(userId);
        }catch (e){
            console.log('Error')
        }
        console.log(responseBasket);
        if (responseBasket?.success === true) {
            if(responseBasket.data=="false"){
                console.log(responseBasket.data.data)
                setOrderProduct("true");
                console.log(orderProduct)}
            else{
                setOrderProduct("false");
                console.log(orderProduct);
            }
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
        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile
    }
}

export default connect(mapStateToProps, null)(Basket);