import React, {useEffect, useState} from "react";
import classes from './MyOrders.module.scss';
import {AllOrders} from "../../../../../../redux/data/auth/apiFunction";
import WaitingPayment from "../LeftMenu/WaitingPayment/WaitingPayment";
import Processing from "../LeftMenu/Processing/Processing";
import DeliverProcess from "../LeftMenu/DeliverProcess/DeliverProcess";
import {loginAuthSuccess} from "../../../../../../redux/data/auth/actions";
import {WaitOrder} from "../../../../../../redux/data/ordersCount/actions";
import {connect} from "react-redux";
import Toolbar from "../../../Header/toolbar/toolbar";
import Footer from "../../../Footer/footer";
import {Link} from "react-router-dom";
import LeftMenu from "../LeftMenu/LeftMenu";

const MyOrders=(props)=>{
    const {userId,ACTION_Orders_SUCCESS}=props;
    const [leftMenu,setLeftMenu]=useState(0);
    const [id,setId]=useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{

        let checkOrders=null;

        try{
            checkOrders = await AllOrders(userId);
        }
        catch (e){
            console.log('Error')
        }
        if(checkOrders?.success===true){
            setId(checkOrders.data)
        }
    },[]);

    const onclickLeftMenu=(event,index)=>{
        event.preventDefault()
        setLeftMenu(index)
    }

    const leftMenuItems=[
        {onClick:(event)=>{onclickLeftMenu(event,1)},children:"در انتظار پرداخت"},
        {onClick:(event)=>{onclickLeftMenu(event,2)},children:" در حال پردازش"},
        {onClick:(event)=>{onclickLeftMenu(event,3)},children:"تحویل شده"},
    ]
    let component;
    if(leftMenu===1){
        component=<WaitingPayment />
    }
    else if(leftMenu===2){
        component=<Processing />
    }
    else if(leftMenu===3){
        component=<DeliverProcess />
    }


    return(
        <div>
            <Toolbar />
            <section className={classes.CartBuy}>
                <Link to={"/profile"}>
                    <div>
                        <i className='fa fa-arrow-right'></i>
                        سفارشات من
                    </div>
                </Link>

                <LeftMenu items={leftMenuItems} />
                <section>
                    {component}
                </section>
            </section>
            <Footer />
        </div>
    )
}
const mapStateToProps  = (state) => {
    return {

        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        counter:state.data.cntOrder.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
        ACTION_Orders_SUCCESS: (data) => dispatch(WaitOrder(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);