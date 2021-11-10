import React, {useEffect, useState} from 'react';
import Auxx from "../../../../hoc/Auxx/Auxx";
import { DetailProduct} from "../../../../redux/data/auth/apiFunction";
import Login from "../../Logn/Login";
import {connect} from "react-redux";
import {loginAuthSuccess} from "../../../../redux/data/auth/actions";
import { WaitOrder} from "../../../../redux/data/ordersCount/actions";
import ProductDetail from "../ProductDetail/ProductDetail";
import Basket from "../Basket/basket";
import InnerImageZoom from "react-inner-image-zoom";
import testimg from "../../../../assets/images/mobilePics/Samsung A12.jpg";
import Snipper from "../../../../common/snipper/snipper";
import {Spinner} from "react-bootstrap";



const Cart=(props)=>{
    const { auth,orderProducts,ACTION_Orders_SUCCESS,count }  = props;
    const [loding,setLoading]=useState(false);
    let IDD=props.match.params.id;
    const [iterateProduct,setIterateProduct]=useState(false);
    let tekrari=false
    useEffect(async ()=>{
        let response=null;
        setLoading(true)
        try {
            response=await DetailProduct(IDD);
        }catch (e){
            console.log('Error')
        }
        if(response?.success===true) {
            setLoading(false)
            const order=  Object.keys(orderProducts).reduce((array, key) => {
                return [...array, {key: orderProducts[key]}]
            }, [])
            if(order.length>0 ) {
                for (let i = 0; i < count; i++) {
                    if (order[i].key.ID === IDD) {
                        setIterateProduct(true);
                        tekrari=true;
                        break
                    }
                }
            }
            if(!tekrari){
                {ACTION_Orders_SUCCESS(response.data)}
            }
        }
    },[]);


    if(auth)
    {
        if(!iterateProduct)
        {
            return (
                <div>

                    {!loding&&<ProductDetail flagbuy={true} id={IDD}/>}
                    {loding&&<Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </div>


            )
        }
        else {
            return (
                <Auxx>
                    <Basket />

                    {!loding&&<span>
                            این محصول قبلا خریداری شده و در سبد خرید شما موجود است.
                    </span>}
                    {loding&&<Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}

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
    return {
        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        orderProducts:state.data.cntOrder.orderProfile,
        count:state.data.cntOrder.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
        ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);