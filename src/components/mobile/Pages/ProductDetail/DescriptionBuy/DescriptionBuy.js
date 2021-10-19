import React from "react";
import classes from './DescriptionBuy.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import Description from "../Description/Description";
import Buy from "../Buy/Buy";

const DescriptionBuy=()=>{
    return(
        <Auxx>
            <div className={classes.Right}>
                <Description />
            </div>
            <div className={classes.Left}>
                <Buy />
            </div>
        </Auxx>

    )
}
export default DescriptionBuy;
