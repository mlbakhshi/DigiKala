import React, {useEffect, useState} from "react";
import classes from './CartContainer.module.scss';
import Auxx from "../../../../../../hoc/Auxx/Auxx";
import supermarket from '../../../../../../assets/SVG/supermarket-svgrepo-com.svg';

const CartContainer=(props)=>{
    const [count,setCount]=useState(0);
    let CurrencyFormat = require('react-currency-format');
    let orderInformation=null;

    if(props.detailProduct) {
        orderInformation = props.detailProduct.map(orderInfo =>
                <Auxx>
                    <div className={classes.Title}>
                        {orderInfo.ProductNamePr}
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


                        {orderInfo.ProductCount === 1
                            ? <span >تنها یک عدد در انبار باقی مانده است  </span>
                            : <span > موجود در انبار  </span>

                        }
                    </div>
                    <div className={classes.NumberDelPrice}>
                        <div className={classes.numberOrder}>
                            <div className={classes.incrbtn}>
                                <button style={{border: "none",outline:"none",backgroundColor: "transparent",}}
                                        onClick={() => setCount(count + 1)}
                                >
                                    <i className="fa fa-plus" ></i>
                                </button>
                            </div>
                            <div className={classes.numorder}>
                                <input
                                    className={classes.formControl}
                                    style={{padding: "0px",fontSize: "14px",backgroundColor: "transparent",border: "none"}}
                                    disabled value={count}
                                />
                            </div>
                            <div className={classes.decrbtn}>
                                <button type="button" style={{border: "none",outline:"none",backgroundColor: "transparent",}}
                                        onClick={() => setCount(count - 1)}
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className={classes.Del}>
                            <div>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </div>
                            <span>
            حذف
        </span>
                        </div>
                        <div  className={classes.Price} >
                            {props.detailProduct.ProductOff  === 1
                                ?  <h2><span >  قیمت با تخفیف
                                    <CurrencyFormat value={count * orderInfo.OffPrice} displayType={'text'} thousandSeparator={true} />

                                    {/*{count * props.detailProduct.OffPrice}  */}
                        </span> </h2>
                                :  <h2><span >
                            <CurrencyFormat value={count * orderInfo.ProductPrice} displayType={'text'} thousandSeparator={true} />
                        </span> </h2>
                            }
                        </div>
                    </div>
                </Auxx>
        )
    }

    return(
        <Auxx>
            {orderInformation}
        </Auxx>
    )
}
export default CartContainer;