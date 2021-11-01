import React, {useEffect, useState} from "react";
import classes from './CartContainer.module.scss';
import Auxx from "../../../../../../hoc/Auxx/Auxx";
import supermarket from '../../../../../../assets/SVG/supermarket-svgrepo-com.svg';
import {DeleteOrder, DetailProduct} from "../../../../../../redux/data/auth/apiFunction";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

const CartContainer=(props)=>{
    const [countOrder,setCountOrder]=useState(1);
    const [order,setOrder]=useState([]);

    // const handleOnclick=(product_id)=>{
    //     useEffect(async ()=>{
    //         let response=null;
    //         try {
    //             response=await DeleteOrder(product_id);
    //
    //         }catch (e){
    //             console.log('Error')
    //         }
    //         if(response?.success===true) {
    //             console.log(response.data)
    //             console.log(response)
    //             setOrder(response.data)
    //             console.log(order)
    //         }
    //
    //     },[])}

    let CurrencyFormat = require('react-currency-format');
    console.log(props.detailProduct.product_id,"container");



    useEffect(async ()=>{
        let response=null;
        try {
            response=await DetailProduct(props.detailProduct.product_id);

        }catch (e){
            console.log('Error')
        }
        if(response?.success===true) {
            console.log(response.data)
            console.log(response)
            setOrder(response.data)
            console.log(order)
        }

    },[]);

    return(
        <Auxx>
            <div className={classes.Title}>
                {order.ProductNamePr}
            </div>
            <div className={classes.Color}>
                <span className={classes.Dot} style={{backgroundColor:"gray"}}></span>
                خاکستری
            </div>
            <div className={classes.Guarantee}>
                <i className="fa fa-check-square"  ></i>
                <span>
                                    گارانتی ۱۸ ماهه دیجی کالا
                </span>
            </div>
            <div className={classes.Seller}>
                <img src={supermarket}/>
                <span>
                                  دیجی‌کالا
                </span>
            </div>
            <div className={classes.Stock}>
                <i className="fa fa-floppy-o" aria-hidden="true" ></i>


                {order.ProductCount === 1
                    ? <span >تنها یک عدد در انبار باقی مانده است  </span>
                    : <span > موجود در انبار  </span>

                }
            </div>
            <div className={classes.NumberDelPrice}>
                <div className={classes.numberOrder}>
                    <div className={classes.incrbtn}>
                        <button style={{border: "none",outline:"none",backgroundColor: "transparent",}}
                                onClick={() => setCountOrder(countOrder + 1)}
                        >
                            <i className="fa fa-plus" ></i>
                        </button>
                    </div>
                    <div className={classes.numorder}>
                        <input
                            className={classes.formControl}
                            style={{padding: "0px",fontSize: "14px",backgroundColor: "transparent",border: "none"}}
                            disabled value={countOrder}
                        />
                    </div>
                    <div className={classes.decrbtn}>
                        <button type="button" style={{border: "none",outline:"none",backgroundColor: "transparent",}}
                                onClick={() => setCountOrder(countOrder - 1)}
                        >
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                {/*<Button onClick={handleOnclick(props.detailProduct.product_id)} >*/}
                <div className={classes.Del}>
                    <div>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                    <span>
            حذف
        </span>
                </div>
                {/*</Button>*/}

                <div  className={classes.Price} >
                    {order.ProductOff  === 1
                        ?  <h2><span >  قیمت با تخفیف
                                    <CurrencyFormat value={countOrder * order.OffPrice} displayType={'text'} thousandSeparator={true} />

                            {countOrder * order.OffPrice}
                        </span> </h2>
                        :  <h2><span >
                            <CurrencyFormat value={countOrder * order.ProductPrice} displayType={'text'} thousandSeparator={true} />
                        </span> </h2>
                    }
                </div>
            </div>
        </Auxx>
    )
}

export default (CartContainer);