import React from "react";
import classes from './DescriptionBuy.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import Description from "../Description/Description";
import Buy from "../Buy/Buy";

const DescriptionBuy=(props)=>{
    console.log(props);
    return(
        <Auxx>
            <div className={classes.Right}>
                <Description  detailProduct={props}/>
            </div>
            <div className={classes.Left}>
                <Buy detailProduct={props}/>
            </div>
        </Auxx>

    )
}
export default DescriptionBuy;
