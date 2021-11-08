import React, {useState} from "react";
import classes from './DescriptionBuy.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import Description from "../Description/Description";
import Buy from "../Buy/Buy";
import CartContainer from "../../Cart/CartContainers/CartContainer/CartContainer";

const DescriptionBuy=(props)=>{
    const [state,setState]=useState(new Date().getTime())
    const onRemoveItem=()=>{
        setState(new Date().getTime())
    }

    return(
        <Auxx>
            <div className={classes.Right}>
                <Description  detailProduct={props}/>
            </div>
            <div className={classes.Left}>
                <Buy  onRemoveItem={props.onRemoveItem} key={state} flagbuy={props.flagbuy} detailProduct={props}/>
            </div>
        </Auxx>

    )
}
export default DescriptionBuy;
