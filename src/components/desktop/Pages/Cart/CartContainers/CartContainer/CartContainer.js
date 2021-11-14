import React, { useState} from "react";
import classes from './CartContainer.module.scss';
import Auxx from "../../../../../../hoc/Auxx/Auxx";
import supermarket from '../../../../../../assets/SVG/supermarket-svgrepo-com.svg';
import {connect} from "react-redux";
import {DelOrder} from "../../../../../../redux/data/ordersCount/actions";

const CartContainer = (props) => {
const {detailProduct}=props;
    const [countOrder, setCountOrder] = useState(1);
    const [order, setOrder] = useState([]);

    let CurrencyFormat = require('react-currency-format');


    return (
        <Auxx>
            <div className={classes.Title}>
                {detailProduct.ProductNamePr}
            </div>
            <div className={classes.Color}>
                <span className={classes.Dot} style={{backgroundColor: "gray"}}></span>
                خاکستری
            </div>
            <div className={classes.Guarantee}>
                <i className="fa fa-check-square"></i>
                <span>
                                    گارانتی ۱۸ ماهه دیجی کالا
                </span>
            </div>
            <div className={classes.Seller}>
                {/*<img src={supermarket}/>*/}
                <i className="fa fa-check-square"></i>
                <span>
                                  دیجی‌کالا
                </span>
            </div>
            <div className={classes.Stock}>
                <i className="fa fa-floppy-o" aria-hidden="true"></i>


                {detailProduct.ProductCount === 1
                    ? <span>تنها یک عدد در انبار باقی مانده است  </span>
                    : <span> موجود در انبار  </span>

                }
            </div>
            <div className={classes.NumberDelPrice}>
                <div className={classes.numberOrder}>
                    <div className={classes.incrbtn}>
                        <button style={{border: "none", outline: "none", backgroundColor: "transparent",}}
                                onClick={() => setCountOrder(countOrder + 1)}
                        >
                            <i  className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className={classes.numorder}>
                       <label>
                        <input
                            className={classes.formControl}

                            disabled value={countOrder}
                        />
                       </label>
                    </div>
                    <div className={classes.decrbtn}>
                        <button  style={{border: "none", outline: "none", backgroundColor: "transparent",}}
                                onClick={() => setCountOrder(countOrder - 1)}
                        >
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>

                <div className={classes.Price}>
                    {detailProduct.ProductOff === 1
                        ? <span>  قیمت با تخفیف
                                    <CurrencyFormat value={countOrder * detailProduct.OffPrice}
                                                    displayType={'text'} thousandSeparator={true}/>

                            {countOrder * order.OffPrice}
                        </span>
                        :
                        <span>
                            <CurrencyFormat value={countOrder * detailProduct.ProductPrice}
                                            displayType={'text'} thousandSeparator={true}/>
                        </span>
                    }
                </div>
            </div>
        </Auxx>
    )
}


export default connect(null, null)(CartContainer);