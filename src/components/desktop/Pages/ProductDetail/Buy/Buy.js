import React, {useState} from "react";
import classes from './Buy.module.scss';
import Labkhand from '../../../../../assets/images/labkhand.png';
import { Button} from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {DelOrder} from "../../../../../redux/data/ordersCount/actions";

const Buy=(props)=>{
    const {ACTION_Orders_DELETE} = props;
    const [delBuy,setDelBuy]=useState(true);
    const handleDelete=(id)=>{
        console.log(id);
        ACTION_Orders_DELETE(id)
        props.onRemoveItem&&props.onRemoveItem()
        setDelBuy(false);
    }


    return(
        <div className={classes.Buy}>
            <div>
                فروشنده
            </div>

            <div className={classes.Contentment} >
                <div style={{width:"8%"}}>
                    <img src={Labkhand}  />
                </div>
                <div className={classes.ContentmentPercent} >
                    <span className={classes.digikala} >
                        دیجی کالا
                    </span>
                    <span className={classes.Rezayat} >
                        87% رضایت خریداران
                    </span>
                </div>
            </div>
            <hr style={{width:"90%"}}/>

            <div className={classes.Guarantee}>
                <i className="fa fa-check-square"  ></i>
                <span className={classes.EgtheenMonth}>
                                    گارانتی 18 ماهه دیجی کالا
                </span>
            </div>
            <hr style={{width:"90%"}}/>

            <div >
                <div className={classes.Stock}>
                    <i className="fa fa-floppy-o" aria-hidden="true" style={{color:"lightskyblue"}}></i>
                    <span className={classes.EgtheenMonth}>
                                            موجود در انبار دیجی کالا

                    </span>
                </div>
                <div>
                    <i className='fa fa-truck' style={{color:"red"}}></i>
                    <span className={classes.SendDigi}>
                                          ارسال دیجی کالا
                    </span>
                </div>

            </div>
            <hr style={{width:"90%"}}/>

            <div>
                <div className={classes.Price}>
                    {props.detailProduct.detailProduct.detailProduct.ProductPrice}
                    تومان
                </div>
                <div className={classes.CountView}>
                    <i className='fa fa-eye'  ></i>
                    <span className={classes.View}>
                  +{props.detailProduct.detailProduct.detailProduct.view}
                        نفر این محصول را دیده اند.
                    </span>
                </div>
                <div className="d-grid gap-2" >
                    {(!props.flagbuy || !delBuy) ? <Link to={`/cart/${props.detailProduct.detailProduct.detailProduct.ID}`} >
                        <Button variant="primary"  style={{width:"95%",backgroundColor:"#ef394e",color:"white"}} >
                            افزودن به سبد خرید

                        </Button>
                    </Link>
                    :
                        <Button variant="primary"  style={{width:"95%",backgroundColor:"#ef394e",color:"white"}}
                                onClick={() => handleDelete(props.detailProduct.detailProduct.detailProduct.ID)}>
                            حذف از سبد خرید
                        </Button>
                    }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.data.cntOrder.count,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
    };
};
export default
connect(mapStateToProps, mapDispatchToProps)
(Buy);