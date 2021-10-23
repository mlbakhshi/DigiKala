import React from "react";
import classes from './Buy.module.scss';
import Labkhand from '../../../../../assets/images/labkhand.png';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';

// Be sure to include styles at some point, probably during your bootstraping
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

// import {Button} from "bootstrap";
const Buy=(props)=>{
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
                    <i className='fas fa-truck' style={{color:"red"}}></i>
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
                    <i className='far fa-eye' ></i>
                    <span className={classes.View}>
                                            +                        {props.detailProduct.detailProduct.detailProduct.view}
                        نفر این محصول را دیده اند.
                    </span>
                </div>

                {/*<div>*/}
                {/*    <Button block lg btnStyle="primary">Block level button</Button>*/}
                {/*</div>*/}
                <div className="d-grid gap-2" >
                    <Button variant="primary"  style={{width:"95%",backgroundColor:"#ef394e",color:"white"}}>
                        افزودن به سبد خرید
                    </Button>
                </div>

                {/*<div>*/}
                {/*    <button style={{backgroundColor:"red",color:"white",wi}}>*/}

                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default Buy;