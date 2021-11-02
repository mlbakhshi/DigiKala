import React from 'react';
import classes from './navigationitem.module.scss';
import {NavLink} from "react-router-dom";
const NavigationItem=(props)=>{
    const {onClick=()=>{},link='',exact,children}=props
    return(
        <li className={classes.NavigationItem}>
            <NavLink
                to={link}
                exact={exact}
                activeClassName={classes.active}
                onClick={onClick}
            >
                {children}
            </NavLink>
        </li>
    )
}
export default NavigationItem;
