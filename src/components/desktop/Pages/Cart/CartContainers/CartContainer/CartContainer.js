import React, {useEffect, useState} from "react";
import classes from './CartContainer.module.scss';
import Auxx from "../../../../../../hoc/Auxx/Auxx";
import supermarket from '../../../../../../assets/SVG/supermarket-svgrepo-com.svg';
import {DetailProduct} from "../../../../../../redux/data/auth/apiFunction";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {DelOrder} from "../../../../../../redux/data/ordersCount/actions";

const CartContainer=(props)=>{
    const {ACTION_Orders_DELETE}=props;
    const [countOrder,setCountOrder]=useState(1);
    const [order,setOrder]=useState([]);
    // const {orders,userId}=props;
    console.log(props)
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
    // console.log(props.detailProduct.product_id,"container");



    // useEffect(async ()=>{
    //     let response=null;
    //     try {
    //         response=await DetailProduct(props.detailProduct.product_id);
    //
    //     }catch (e){
    //         console.log('Error')
    //     }
    //     if(response?.success===true) {
    //         console.log(response.data)
    //         console.log(response)
    //         setOrder(response.data)
    //         console.log(order)
    //     }
    //
    // },[]);
const handleDelete=(id)=>{
    ACTION_Orders_DELETE(id)
    }
    return(
        <Auxx>
            <div className={classes.Title}>
                {props.detailProduct.key.ProductTitle}
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


                {props.detailProduct.key.ProductCount === 1
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
                    {/*<button onClick={handleDelete(props.detailProduct.key.ID)}>*/}
                         <span>
            حذف
        </span>
                    {/*</button>*/}

                </div>
                {/*</Button>*/}

                <div  className={classes.Price} >
                    {props.detailProduct.key.ProductOff  === 1
                        ?  <h2><span >  قیمت با تخفیف
                                    <CurrencyFormat value={countOrder * props.detailProduct.key.OffPrice} displayType={'text'} thousandSeparator={true} />

                            {countOrder * order.OffPrice}
                        </span> </h2>
                        :
                        <h2><span >
                            <CurrencyFormat value={countOrder * props.detailProduct.key.ProductPrice} displayType={'text'} thousandSeparator={true} />
                        </span> </h2>
                    }
                </div>
            </div>
        </Auxx>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {

        // dispatching actions returned by action creators
        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
        // reset: () => dispatch(reset()),

    }
}

export default  connect(null,mapDispatchToProps)(CartContainer);