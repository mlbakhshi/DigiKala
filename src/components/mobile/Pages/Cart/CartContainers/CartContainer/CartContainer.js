import React, {useState} from "react";
import classes from './CartContainer.module.scss';
import Auxx from "../../../../../../hoc/Auxx/Auxx";
import supermarket from '../../../../../../assets/SVG/supermarket-svgrepo-com.svg';
import {DelOrder} from "../../../../../../redux/data/ordersCount/actions";
import {connect} from "react-redux";
const CartContainer=(props)=>{
    const {ACTION_Orders_DELETE} = props;
    const [countOrder,setCountOrder]=useState(1);
    const [order,setOrder]=useState([]);
    let CurrencyFormat = require('react-currency-format');

    const handleDelete = (id) => {
        ACTION_Orders_DELETE(id)
        props.onRemoveItem&&props.onRemoveItem()
    }
    return (
        <Auxx>
            <div className={classes.Title}>
                {props.detailProduct.ProductNamePr}
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
                <img src={supermarket}/>
                <span>
                                  دیجی‌کالا
                </span>
            </div>
            <div className={classes.Stock}>
                <i className="fa fa-floppy-o" aria-hidden="true"></i>


                {props.detailProduct.ProductCount === 1
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
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className={classes.numorder}>
                        <input
                            className={classes.formControl}
                            style={{width: "100%", fontSize: "14px", backgroundColor: "transparent", border: "none"}}
                            disabled value={countOrder}
                        />
                    </div>
                    <div className={classes.decrbtn}>
                        <button type="button" style={{border: "none", outline: "none", backgroundColor: "transparent",}}
                                onClick={() => setCountOrder(countOrder - 1)}
                        >
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>

                <div className={classes.Price}>
                    {props.detailProduct.ProductOff === 1
                        ? <h2><span>  قیمت با تخفیف
                                    <CurrencyFormat value={countOrder * props.detailProduct.OffPrice}
                                                    displayType={'text'} thousandSeparator={true}/>

                            {countOrder * order.OffPrice}
                        </span></h2>
                        :
                        <h2><span>
                            <CurrencyFormat value={countOrder * props.detailProduct.ProductPrice}
                                            displayType={'text'} thousandSeparator={true}/>
                        </span></h2>
                    }
                </div>
            </div>
        </Auxx>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
    }
}

export default  connect(null,mapDispatchToProps)(CartContainer);