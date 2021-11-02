import React, {useState} from "react";
import classes from './Myprofile.module.scss';
import RightMenu from "./RightMenu/RightMenu";
import LeftMenu from "./LeftMenu/LeftMenu";
import Toolbar from "../../Layout/Header/toolbar/toolbar";
import CartContainers from "../Cart/CartContainers/CartContainers";
import CartBuy from "../Cart/CartContainers/CartBuy/CartBuy";
import Footer from "../../Layout/Footer/footer";
import Auxx from "../../../../hoc/Auxx/Auxx";
import {connect} from "react-redux";
import WaitingPayment from "./LeftMenu/WaitingPayment/WaitingPayment";
import Processing from "./LeftMenu/Processing/Processing";
import DeliverProcess from "./LeftMenu/DeliverProcess/DeliverProcess";

const MyProfile=(props)=>{
    const {auth}=props;
    const [leftMenu,setLeftMenu]=useState(0)

    const onclickLeftMenu=(event,index)=>{
        event.preventDefault()
        setLeftMenu(index)
    }

    const leftMenuItems=[
        {onClick:(event)=>{onclickLeftMenu(event,1)},children:"در انتظار پرداخت"},
        {onClick:(event)=>{onclickLeftMenu(event,2)},children:" در حال پردازش"},
        {onClick:(event)=>{onclickLeftMenu(event,3)},children:"تحویل شده"}
    ]
    let component;
    if(leftMenu===1){
        component=<WaitingPayment />
    }
    else if(leftMenu===2){
        component=<Processing />
    }
    else{
        component=<DeliverProcess />
    }
    return(

        <div>
                <Toolbar/>

            <div className={classes.Cart}>
                <aside className={classes.CartContainers}>
                    <RightMenu/>
                </aside>
                <section className={classes.CartBuy}>
                    <LeftMenu items={leftMenuItems} />
                    <section>
                        {component}
                    </section>
                </section>

            </div>
                <Footer/>
        </div>
    )
}

export default (MyProfile);
