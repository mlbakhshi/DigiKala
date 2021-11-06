import React from "react";
import classes from './LeftMenu.module.scss';
import NavigationItem from "../../../../../desktop/Layout/Header/NavigationItems/Navigationitem/navigationitem";

const LeftMenu=(props)=>{
    const {items=[]}=props
    return(
        <div className={classes.LeftSide}>
            تاریخچه سفارشات
            <ul className={classes.NavigationItems}>
                {items.map(item=> <NavigationItem onClick={item.onClick} link={item.Link||''} exact={item.exact}>
                    {item.children}
                </NavigationItem>)}
            </ul>
        </div>
    )
}
export default LeftMenu;
