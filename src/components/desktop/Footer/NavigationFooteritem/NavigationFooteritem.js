import React from 'react';
import classes from './Navigationfooteritem.module.css';
import {NavLink} from "react-router-dom";

const NavigationFooterItem=(props)=>{
    return(
        <li className={classes.NavigationFooterItem}>
            <NavLink
                style={{ textDecoration: "none",color:'#969393'}}
                to={props.link}
                exact={props.exact}
                activeStyle={{ color: '#969393' }}>
                {props.children}
            </NavLink>
        </li>
    )
}
export default NavigationFooterItem;
