import React from 'react';
import '../../../../assets/icon/style.css';
import classes from './navigationitems.module.css';
import NavigationItem from "./Navigationitem/navigationitem";
const NavigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>
                <span className="icon-menu"></span>
                دسته بندی کالاها
            </NavigationItem>
            <NavigationItem link="/Orders" >
                <span className="icon-super-market"></span>
                سوپرمارکت
            </NavigationItem>
            <NavigationItem link="/Orders" >
                <span className="icon-off-suggestion"></span>
                تخفیف ها و پیشنهادها
                        </NavigationItem>
            <NavigationItem link="/Orders" >
                <span className="icon-My-Dg"></span>
                دیجی کالای من </NavigationItem>
            <NavigationItem link="/Orders" >
                <span className="icon-Dg-plus"></span>
                دیجی پلاس </NavigationItem>
            <NavigationItem link="/Orders" >
                <span className="icon-Dg-club"></span>
                دیجی کلاب </NavigationItem>
            <NavigationItem link="/Orders" >
                <span className="icon-Dg-paybala"></span>
                دیجی پی </NavigationItem>
        </ul>
    )
}
export default NavigationItems
