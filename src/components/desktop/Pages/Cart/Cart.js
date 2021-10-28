import React, {useEffect, useState} from 'react';
import classes from './Cart.module.scss';
import CartContainers from "./CartContainers/CartContainers";
import CartBuy from "./CartContainers/CartBuy/CartBuy";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Footer from "../../Layout/Footer/footer";
import {DetailProduct} from "../../../../redux/data/auth/apiFunction";
import Login from "../../Logn/Login";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import {Button} from "bootstrap";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const Cart=(props)=>{
    const { auth }  = props;
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

console.log(auth);
    if(auth)
    {
        console.log(auth);
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
    else {
        return(
           // <Modal.Dialog>
           //     <Modal.Header closeButton>
           //         <Modal.Title>Modal title</Modal.Title>
           //     </Modal.Header>
           //
           //     <Modal.Body>
           //         <p>Modal body text goes here.</p>
           //     </Modal.Body>
           //
           //     <Modal.Footer>
           //         <Button variant="secondary">Close</Button>
           //         <Button variant="primary">Save changes</Button>
           //     </Modal.Footer>
           // </Modal.Dialog>
          <Auxx>
              <Login />
          </Auxx>
        )

    }

}
const mapStateToProps  = (state) => {
    console.log(state.auth.isLogin);
    return {
        auth: state.auth.isLogin
    }
}

export default connect(mapStateToProps, null)(Cart);