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



const Cart=(props)=>{
    const { auth,userId }  = props;
    let IDD=props.match.params.id;
    // const [product,setProduct]=useState([]);
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
            responseBasket=await BuyProduct(IDD,userId);
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
        console.log(orderProduct);
        if(orderProduct)
        {
            return (
                <Auxx>
                    <Toolbar/>
                    <div className={classes.Cart}>
                        <section className={classes.CartContainers}>
                            {/*<CartContainers userId={userId}/>*/}

                            محصول ثبت شد
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
            return (
                <Auxx>
                    <Toolbar/>
                    <div className={classes.Cart}>
                        <section className={classes.CartContainers}>
                            {/*<CartContainers userId={userId}/>*/}

                            قبلا خریداری شده
                        </section>
                        <aside className={classes.CartBuy}>
                            <CartBuy/>
                        </aside>
                    </div>
                    <Footer/>
                </Auxx>
            )
        }


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

export default connect(mapStateToProps, null)(Cart);